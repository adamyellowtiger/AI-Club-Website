# Program revision validation · 2026-10-05

Production preview: `http://127.0.0.1:4174/AI-Club-Website/`.

## Build and data

- `npm install`, `npm run validate`, and `npm run build`: passed. There are no additional lint/test commands in package.json.
- Exactly 28 unique meetings numbered 1–28, six valid categories, and five chronological phases. Phase membership, required titles/summaries/tags, ISO dates, and at most one current meeting are validated.
- Resource validation rejects malformed paths, traversal, public/ prefixes, missing files, and invalid URLs. Legacy archive links are checked too.
- No new runtime dependencies. Build JS is approximately 201 KB (63.6 KB gzip), CSS 31.5 KB (7.6 KB gzip).
- All dates remain TBA. No sessions are marked completed and no new resource links have been fabricated.

## Browser checks

- Visually inspected 375px, 768px, and 1440px. No horizontal overflow; meetings remain a single chronological column.
- All 28 cards appear in order. All five phase controls open and close.
- Interest filters: All 28, Coding 11, Concepts 10, Careers 4, Ethics 5, Projects 3, Showcase 1. Filter counts can overlap because secondary tags are included. Empty phases disappear; buttons expose aria-pressed and results are announced.
- Keyboard checks passed for mobile navigation, phase/filter controls, meeting details, FAQ, and nested Math Corners at meetings 3, 14, and 17.
- Direct meeting links reveal the correct phase and reset a filter that hides the target. Same-hash links were checked as well.
- The all-TBA current/next panel works. The hero derives 12 coding/project/showcase sessions from the data.
- Latest Daily Bit and the three-entry `?view=bits` archive remain functional. Returning from the archive to Join works.
- Team names and order remain unchanged. Historical resources and social destinations are preserved.
- No application exceptions or failed site requests in the checked navigation flows. Reduced-motion behaviour passed.
- Mobile Lighthouse: Performance 95, Accessibility 100, Best Practices 100, SEO 100. Local lab results vary with host load and are not production field measurements.
- Social preview PNG refreshed from the matching 1200 × 630 SVG source.

Screenshots and raw Lighthouse output are saved in ignored `output/`. A non-blocking Browserslist database-age notice remains.

## Design and scope decisions

The revised model removes enforced alternation, fixed category totals, pairing by adjacent meeting number, preparation tiers, and hard-coded signature meeting numbers. `highlight` is optional content. Category labels/icons share one component; detailed meeting rendering lives in another.

Kept the existing light blue/white identity, Byte poses, GitHub Pages base, historical assets, and current team data. Did not add a large survey-results section because the sample is preliminary. Used a short early-feedback note instead. Did not build the planned assistant, agent, or lesson notebooks: this update describes those future sessions without inventing finished resources. No salary estimates or guaranteed career outcomes were added.

## Executive confirmation still needed

Confirm meeting dates, current progress, session leaders where desired, preparation instructions, and material links as they become available. Continue collecting member feedback before treating the early survey as representative of the entire club.
