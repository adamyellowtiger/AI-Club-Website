# Bayview AI Club · 2026–27

A student-led AI club website built with Vite, React, TypeScript, Tailwind CSS, and Lucide. The program contains 28 chronological meetings across five phases: concepts, coding, careers, ethics, projects, and a showcase. No backend or account system is needed.

## Run locally

Install Node.js 20 or later, open a terminal in this folder, and run:

```sh
npm install
npm run dev
```

Open the address printed in the terminal, including `/AI-Club-Website/`.

## Build and preview

```sh
npm run validate
npm run build
npm run preview
```

Preview uses the real GitHub Pages base path. Keep `base: '/AI-Club-Website/'` in `vite.config.ts`. GitHub Actions installs with `npm ci`, builds, and publishes `dist` when changes reach `main`. A local build does not publish anything.

## Update a meeting

Open `src/data/roadmap.ts`. Find the meeting by its `number` and edit only that entry.

- Mark a finished meeting with `status: 'completed'`.
- Set the meeting being featured to `status: 'current'`. Keep at most one current meeting, and mark the previous one completed when appropriate.
- Use `status: 'upcoming'` for an announced future meeting, or `'tba'` when its date is unknown.
- Add `date: 'YYYY-MM-DD'` only after the date is confirmed.
- Optionally add `leader` and `preparation` text.
- Put new materials in `public/2026-27/meetings/` (create folders as needed).
- Add `slidesHref`, `recapHref`, or `labHref` using a public-relative path such as `'2026-27/meetings/01-slides.pdf'`. Do not include `public/` in the link. HTTPS notebook links also work.

For example, after a real announcement, a meeting may have:

```ts
status: 'current',
slidesHref: '2026-27/meetings/01-slides.pdf',
```

Only add the link after uploading the file. Missing resource fields produce a quiet pending message, not a broken button. Counts, current phase, previous meeting, and next topic are calculated from the roadmap. Without a current meeting, the first incomplete meeting is shown as the next planned topic. Initially all dates and progress are unconfirmed; no completed sessions are claimed.

Keep unique meeting numbers 1–28 and put every meeting in an existing phase. Phases must progress in order as meeting numbers increase. Every meeting needs a title, summary, category, status, and tags array. `npm run validate` checks these rules, dates, and resource paths.

### Categories, interests, and depth

Choose one primary `category`: `concept`, `coding`, `career`, `ethics`, `project`, or `showcase`. There is no required alternation. Use `tags` for secondary interests such as `Python`, `PyTorch`, `Ethics`, `Careers`, `Projects`, or `RAG`.

The roadmap defaults to All. Filters match a primary category and relevant secondary tags: Coding includes Python, Careers includes Careers, Ethics includes Ethics, and Projects includes Projects. A meeting can appear in more than one interest filter; counts are derived and need not add up. Empty phases are hidden during filtering. Each category has a shared icon and label in `CategoryBadge.tsx`.

Add `goal`, `activity`, `measure`, `discussion`, `takeaway`, or `report` when useful. Keep `summary` short enough to scan. Add `optionalMath` and a plain-language `mathExplanation` for an optional Math Corner; students open it separately inside the meeting details. Add `careerConnection` to explain where a skill is used, without promising jobs or salaries. An optional `highlight` labels special sessions (currently the assistant project and year-end showcase); no meeting numbers are hard-coded into the renderer.

Hero building-session counts derive from coding, project, and showcase categories. Progress and category totals also derive from the data. Do not enter separate counters.

## Other content updates

| What you want to change | File |
| --- | --- |
| Dates, status, lessons, labs, meeting materials | `src/data/roadmap.ts` |
| Room, year, meeting duration, navigation, social destinations | `src/data/site.ts` |
| Optional announcement | `siteNotice` in `src/data/site.ts` |
| Daily Bits | `src/data/aiBits.ts` |
| Starter and general resources | `src/data/resources.ts` |
| Student executives and faculty advisor | `src/data/team.ts` |
| FAQ answers | `src/data/faq.ts` |
| Previous-year meeting summaries | `src/data/archive.ts` |

To post an announcement, set `siteNotice.enabled` to `true`, fill in `label` and `message`, and choose `info`, `important`, or `event`. Set it back to `false` when the notice expires.

To add a Daily Bit, copy an existing entry, give it a unique `id`, use an ISO date such as `2026-10-05`, and fill in the title, summary, tags, and body paragraphs. Add an image to `public/daily-bits/` if available, with meaningful alternative text. The homepage shows the three latest summaries. Full entries live at `/AI-Club-Website/#/ai-bits`, with the latest entry featured.

Team members sort by `order`, not by name. Keep the approved order and tiers: two co-presidents, senior executive, functional executives, then supporting executive. The faculty advisor is separate.

## Assets and archives

All existing PDFs, slide decks, Daily Bit images, and original root assets remain. Public paths are intentionally preserved, including `meeting-slides-archive.html`, `weekly-recap-notes-archive.html`, `resources/`, `slides/`, and `daily-bits/`. Some historical files are duplicates; do not delete or move them just to tidy folders, because old shared links may depend on them.

The reusable `src/graphics/Byte.tsx` supports `excited`, `pointing`, `thinking`, `teaching`, `confused`, and `builder` poses. Keep the name Byte. Styling and responsive rules live in `src/styles.css`; design decisions are documented in `design-system/MASTER.md`.

## Before publishing

Run validation and the production build. Check the preview at mobile and desktop widths. Try navigation, phase controls, meeting details, the Daily Bit archive, FAQ, and resource links. Confirm any dates and announcements with the executive team. External social channels may require sign-in; their destinations are preserved from the original site.


## Page navigation

The site uses dependency-free hash routes so direct links and refresh work on GitHub Pages under `/AI-Club-Website/`: `#/home`, `#/program`, `#/meetings`, `#/ai-bits`, `#/resources`, `#/team`, and `#/join`.

`src/navigation.ts` owns page labels, titles, descriptions, and route parsing. `PageHeader` supplies the shared interior-page heading. Route changes update metadata, scroll to the top, and focus the heading. Deep links use `#/program/meeting-20`, `#/ai-bits/bit-<id>`, or `#/join/faq`. Legacy section hashes and the former `?view=bits` entry point are accepted for compatibility; primary navigation uses only the new routes.

Home includes the hero, next meeting, four discovery cards, three recent Bits, and a short Join invitation. The complete roadmap and learning pillars live on Program. Meetings derives upcoming/current-year history from the same roadmap and includes historical sessions. Resources retains the original downloadable files and archive pages.
