# Renewal validation · 2026-10-05

Tested the production build at `http://127.0.0.1:4174/AI-Club-Website/`.

- `npm install`: passed; no new runtime dependencies.
- `npm run validate`: passed. Exactly 28 meetings, 14 theory meetings, 14 labs, five phases, contiguous unique numbers, and Signature Labs 22/26/28. Executive order and local data/archive paths checked.
- `npm run build`: passed TypeScript and Vite. Final JS approximately 194.4 KB (61.9 KB gzip); CSS 27.8 KB (6.8 KB gzip).
- Responsive browser checks: 360, 390, 768, 1024, and 1440 pixels. No horizontal overflow, all 28 meeting cards accessible after expanding phases, executive order preserved.
- Keyboard checks: mobile menu and Escape, meeting disclosure, FAQ disclosure, visible focus. Reduced-motion scrolling verified.
- Meeting 22 deep link opens its containing phase. Daily Bit archive contains all three published entries and returns correctly to Join.
- Twenty unique local links checked through the preview server; no failed links, broken images, or application exceptions in the checked navigation flows.
- All six PDFs, two public slide decks, historical Daily Bit images, and original root assets retained. Legacy archive URLs preserved.
- Discord and Instagram returned HTTP 200. Classroom redirected successfully to Google sign-in. This checks reachability, not authenticated membership or invitation acceptance.
- Stale seasonal and executive text and visible old mascot naming removed from active source.
- Final mobile Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100. These are local lab results, not guarantees of production field performance.
- Social preview refreshed as 1200 × 630 PNG with matching SVG source.

Screenshots and raw Lighthouse reports are in ignored `output/`. The build emits a non-blocking Browserslist database-age notice.

## Information still awaiting the club

Meeting dates, current meeting selection, completed sessions, and new meeting resources have not been confirmed. Entries therefore start as Date TBA with no completion claims. Existing publication dates are preserved. No attendance counts, achievements, new surnames, or endorsements were invented.

## Publication state

Implementation is saved locally. No push to main or production deployment was performed.
