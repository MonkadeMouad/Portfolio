# Mouad Monkade — Portfolio

React + Vite portfolio for Software Engineer / Full-Stack Developer and Data Scientist / Machine Learning Engineer opportunities.

## Development

Run `npm ci`, then `npm run dev`. Use the URL printed by Vite; occupied ports can change it. For a production preview, run `npm run build` and `npm run preview`.

## Validation

Run `npm run build`, `npm run lint` and `git diff --check`. Check 1440, 1024, 390 and 320 px layouts, modal keyboard cycling, Escape, focus restoration, image loading and console errors.

## Structure

- `src/App.jsx`: sections and project cards.
- `src/data/projects.js`: project copy and media metadata.
- `src/components/ProjectCaseStudy.jsx`: native dialog and keyboard handling.
- `public/projects/`: illustrations.
- `docs/content-evidence.md`: evidence and outstanding factual checks.

## Publication checklist

Two candidate CVs were found in Desktop/CV_Final. They are French and include a telephone number, email, location and the unresolved F1 0.82 result. Confirm English public versions before adding downloads under `public/cv/`. The placeholder intentionally has no missing-document links.

Vercel configuration: Vite preset, `npm run build`, output `dist`. Section anchors do not require a SPA route rewrite. Actual hosted project settings have not been verified. Confirm the production domain before adding canonical, og:url and absolute social-preview image URLs.

Measure Lighthouse on a production build. Local lab scores do not establish field Core Web Vitals. No Lighthouse score is claimed without an actual run.

Preserve experimental context and team attribution. Work on `codex/portfolio-dual-profile`; push and deployment require approval.
