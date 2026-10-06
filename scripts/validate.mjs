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
const { meetings, phases, categories } = await loadData("roadmap");
assert.equal(meetings.length, 28);
assert.deepEqual(
  meetings.map((m) => m.number).sort((a, b) => a - b),
  Array.from({ length: 28 }, (_, i) => i + 1),
);
assert.equal(phases.length, 5);
assert.equal(new Set(phases.map((p) => p.number)).size, phases.length);
assert.equal(new Set(phases.map((p) => p.id)).size, phases.length);
assert.deepEqual(
  phases.map((p) => p.number),
  Array.from({ length: phases.length }, (_, i) => i + 1),
);
assert.ok(
  meetings.filter((m) => m.status === "current").length <= 1,
  "Only one current meeting is allowed",
);
const ordered = [...meetings].sort((a, b) => a.number - b.number);
let previousPhase = 0;
for (const m of ordered) {
  assert.ok(
    phases.some((p) => p.number === m.phase),
    `Unknown phase for meeting ${m.number}`,
  );
  assert.ok(
    m.phase >= previousPhase,
    `Phase order goes backwards at meeting ${m.number}`,
  );
  previousPhase = m.phase;
  assert.ok(
    Object.hasOwn(categories, m.category),
    `Invalid category: ${m.category}`,
  );
  assert.ok(["completed", "current", "upcoming", "tba"].includes(m.status));
  assert.ok(
    typeof m.title === "string" && m.title.trim(),
    `Missing title: ${m.number}`,
  );
  assert.ok(
    typeof m.summary === "string" && m.summary.trim(),
    `Missing summary: ${m.number}`,
  );
  assert.ok(
    Array.isArray(m.tags) &&
      m.tags.every((tag) => typeof tag === "string" && tag.trim()),
    `Invalid tags: ${m.number}`,
  );
  if (m.date) {
    assert.match(m.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(
      new Date(`${m.date}T12:00:00Z`).toISOString().slice(0, 10),
      m.date,
    );
  }
}
for (const phase of phases)
  assert.ok(
    meetings.some((m) => m.phase === phase.number),
    `Empty phase: ${phase.title}`,
  );
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
  "slides/bayview-ai-club-kickoff.pdf",
  "slides/bayview-ai-club-kickoff-preview.png",
  ...resources.map((r) => r.href),
  ...meetings.flatMap((m) => [m.slidesHref, m.recapHref, m.labHref]),
  ...aiBits.flatMap((b) => [
    b.imageSrc,
    ...(b.supportingImages ?? []).map((i) => i.src),
  ]),
].filter(Boolean);
assert.deepEqual(
  readFileSync(new URL("../public/slides/bayview-ai-club-kickoff.pdf", import.meta.url)),
  readFileSync(new URL("../Bayview_AI_Club_Kickoff.pptx.pdf", import.meta.url)),
  "Published kickoff PDF must match the original slideshow",
);
for (const href of links) {
  assert.equal(href, href.trim(), `Whitespace in resource path: ${href}`);
  if (/^https?:\/\//.test(href)) {
    assert.ok(new URL(href).hostname, `Invalid external URL: ${href}`);
  } else {
    const relative = decodeURIComponent(
      href.replace(/^\/AI-Club-Website\//, ""),
    );
    assert.ok(
      relative && !/^[\/]|[\\:#?]/.test(relative),
      `Malformed local resource: ${href}`,
    );
    assert.ok(
      !relative.startsWith("public/"),
      `Omit public/ from resource URLs: ${href}`,
    );
    assert.ok(
      relative
        .split("/")
        .every((part) => part && part !== "." && part !== ".."),
      `Invalid path segments: ${href}`,
    );
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
  "Validated: 28 chronological meetings, five ordered phases, valid categories and content, dates, team order, unique Bits, and valid local data/archive links.",
);
