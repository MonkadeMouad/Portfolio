# Portfolio content evidence

Implementation follows the Phase A audit. Public copy is English. Reports document claims; experiments have not been reproduced.

## CodeGuard-Card
- Source: `C:/Users/monka/Desktop/S10/MONKADE_rapport_FST.pdf`, figures 4.4–4.13 and table 4.1 (PDF pages 31–38).
- Corpus: report describes 40 applets, including 10 injected anomalies.
- Do not publish F1 0.82 or the comparison chart until precision/recall/F1 inconsistencies and averaging protocol are resolved.
- Dynamic APDU feature implementation needs source verification.
- `public/projects/codeguard/pipeline.svg` is an original simplified explanatory diagram, not an experimental plot or a claim that the models run sequentially.
- Confirm employer wording (Digital House Academy / Digital House Group) and exact individual responsibilities before final publication.

## Autonomous Driving
- Sources: `C:/Users/monka/Desktop/S9/ILIAR/Iliar_rapport.pdf`; https://github.com/MonkadeMouad/Projet-ILIAR.
- Team authors: Mouad Monkade and Hamza Amrani. Detailed division of responsibilities still needs confirmation.
- Validation MAE 0.3157, epoch 4: PDF page 12. Targets are normalized; do not label the value degrees or radians.
- `steering-distribution.png`: extracted figure 4, PDF page 5 (1193 × 623).
- `gradcam.png`: extracted figure 12, PDF page 15 (960 × 240). Interpretation only, not proof of safety.
- Reconcile normalization, steering scale and flip-axis differences in the available training/inference scripts before claiming reproducibility.

## Baccvs
- Existing user-provided contribution descriptions retained. No new architecture, authorship, metric or backend completion claim.
- Await repository/diffs, screenshots and end-to-end API validation. No invented repository or demo link.

## Pending additions
- Web AI Assistant: https://github.com/MonkadeMouad/web-ai-assistant. Code uses FastAPI, DuckDuckGo, Ollama and SSE; README still refers to Claude. Add the fourth card after personal role and a working demonstration are confirmed. Do not infer authorship from repository ownership.
- PACR remains optional: https://github.com/MonkadeMouad/Projet-PACR. Needs contribution details and simulation evidence before selection.
- Two finalized CV PDFs were not attached. Keep the existing non-interactive resume placeholder until actual documents are provided.
- LinkedIn content has not been verified.

## Review before publication
- Confirm the above open points and media attribution/publication suitability.
- Check build, lint, mobile widths and native dialog keyboard behavior.
- No deployment or push is authorized by this implementation step.

## Latest implementation review
- Candidate CVs located in Desktop/CV_Final: CV_MONKADE_MOUAD_DS.pdf and CV_MONKADE_MOUAD_Full Stack.pdf. Both are French, include telephone/email/location, and repeat the unresolved F1 0.82 result. They are not copied into public assets pending English public versions and metric reconciliation.
- Added objectives and project context to all three studies, direct driving source link, unique accessible card-button names and skip navigation.
- Portrait converted to WebP: 301,358 bytes to 14,938 bytes (95% smaller).
- Build, lint and diff checks pass. DOM widths equal scroll widths at 1440, 1024, 390 and 320 px. Updated dialog objectives and focus cycling verified; no warning/error console entries captured.
- Actual hosted Vercel settings and field Core Web Vitals remain unverified. No deployment performed.

## Baccvs and driving case studies
- Baccvs architecture is based on Desktop/Baccvs/package.json, src/APIService/api.ts and Redux slices. No backend technology is inferred from the mobile code. Contributions and local journey tests are user/CV documented; detailed diffs and API end-to-end validation remain pending.
- Gazebo screenshot: Desktop/S9/ILIAR/ros_ws/hammou/image.png copied to public/projects/driving/gazebo.png. Depicts environment/cameras; does not establish autonomous route completion.
- Driving study keeps team attribution, normalized validation MAE 0.3157 at epoch 4 and reproduction caveat. No latency, improvement percentage or lap-success metric is claimed.
- Shared case-study renderer preserves the approved CodeGuard layout and adapts section labels, pipeline captions, facts and limitations by project.
