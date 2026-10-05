import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import ts from "typescript";

async function loadData(name) {
  const source = readFileSync(
    new URL(`../src/data/${name}.ts`, import.meta.url),
    "utf8",
  );
  const { outputText } = ts.transpileModule(
    source.replaceAll("import.meta.env.BASE_URL", "'/AI-Club-Website/'"),
    {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    },
  );
  return import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  );
}
const { meetings, phases } = await loadData("roadmap");
assert.equal(meetings.length, 28);
assert.deepEqual(
  meetings.map((m) => m.number).sort((a, b) => a - b),
  Array.from({ length: 28 }, (_, i) => i + 1),
);
assert.equal(phases.length, 5);
assert.equal(meetings.filter((m) => m.type === "theory").length, 14);
assert.equal(meetings.filter((m) => m.type === "lab").length, 14);
assert.deepEqual(
  meetings.filter((m) => m.labTier === "signature").map((m) => m.number),
  [22, 26, 28],
);
assert.ok(
  meetings.filter((m) => m.status === "current").length <= 1,
  "Only one current meeting is allowed",
);
const phaseEnds = [6, 12, 20, 26, 28];
for (const m of meetings) {
  assert.equal(m.type, m.number % 2 ? "theory" : "lab");
  assert.equal(m.phase, phaseEnds.findIndex((end) => m.number <= end) + 1);
  assert.ok(m.type === "theory" ? m.coreIdea && m.takeaway : m.question);
  if (m.date) {
    assert.match(m.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(
      new Date(`${m.date}T12:00:00Z`).toISOString().slice(0, 10),
      m.date,
    );
  }
}
const { team } = await loadData("team");
assert.deepEqual(
  [...team].sort((a, b) => a.order - b.order).map((m) => m.name),
  [
    "Adam Fan",
    "Leo Wang",
    "Albert Yang",
    "Claire Bilodeau",
    "Connie Cao",
    "Kiyan",
    "Muhammed",
  ],
);
const { aiBits } = await loadData("aiBits");
assert.equal(new Set(aiBits.map((bit) => bit.id)).size, aiBits.length);
const { resources } = await loadData("resources");
const links = [
  ...resources.map((r) => r.href),
  ...meetings.flatMap((m) => [m.slidesHref, m.recapHref, m.labHref]),
  ...aiBits.flatMap((b) => [
    b.imageSrc,
    ...(b.supportingImages ?? []).map((i) => i.src),
  ]),
].filter(Boolean);
for (const href of links) {
  assert.notEqual(href, "#");
  if (!/^https?:/.test(href)) {
    const relative = href.replace(/^\/AI-Club-Website\//, "");
    assert.ok(
      existsSync(new URL(`../public/${relative}`, import.meta.url)),
      `Missing asset: ${href}`,
    );
  }
}
for (const file of [
  "meeting-slides-archive.html",
  "weekly-recap-notes-archive.html",
]) {
  const html = readFileSync(
    new URL(`../public/${file}`, import.meta.url),
    "utf8",
  );
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!/^https?:|^#/.test(href))
      assert.ok(
        existsSync(new URL(`../public/${href}`, import.meta.url)),
        `Broken archive link: ${href}`,
      );
  }
}
console.log(
  "Validated: 28 meetings, 14 theory/lab pairs, five phases, three signature labs, dates, team order, unique Bits, and all local data/archive links.",
);
