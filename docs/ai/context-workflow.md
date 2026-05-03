# Workflow Context

## Task intake
- Create work in `.github/ISSUE_TEMPLATE/work-item.md`.
- Pick one type: Feature, Bug, Improvement, or Chore.
- Define acceptance criteria before implementation.

## Implementation style
- Keep PRs small and single-purpose.
- Match existing naming and file organization.
- Add only necessary comments; prefer self-explanatory code.

## Validation baseline
- Run lint when code changes affect app logic or UI:
  - `npm run lint`
- For UI work, validate impacted platforms (`iOS`, `Android`, `Web`).

## Commit and PR standards
- Follow `DEV.md` commit format.
- Use `.github/pull_request_template.md` for all PRs.
- Link issue in PR (`Closes #<number>`).
- Document what AI generated and what was manually verified.

## Done criteria
- Acceptance criteria completed.
- Validation notes included.
- No unrelated changes mixed in.

