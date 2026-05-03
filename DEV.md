# Development Guidelines

Use this file as the default standard for day-to-day work in this repo.

## 1) Commits

### Commit format
Use:

`<type>(<scope>): <short summary>`

Examples:
- `feat(match): add create match form`
- `fix(auth): prevent crash when token is missing`
- `improvement(ui): simplify empty state copy`
- `chore(deps): update expo and react-navigation`

### Allowed types
- `feat` -> new capability
- `fix` -> bug fix
- `improvement` -> better existing behavior without new feature
- `chore` -> maintenance (deps, config, tooling)
- `refactor` -> internal code change without behavior change
- `docs` -> documentation only
- `test` -> tests only
- `ci` -> workflow or automation changes

### Commit rules
- Keep commits small and focused on one change.
- Write summaries in imperative mood ("add", "fix", "update").
- Keep summary clear and short (target <= 72 chars).
- Do not mix unrelated changes in the same commit.

## 2) Issues

Use `.github/ISSUE_TEMPLATE/work-item.md` for all work.

### Type chooser
- **Feature**: adds a new capability.
- **Bug**: fixes broken behavior.
- **Improvement**: improves an existing flow/UX/performance.
- **Chore**: maintenance work with no direct product behavior change.

### Minimum issue quality
Before starting implementation, issue should include:
- Goal
- Why this matters
- Scope
- Acceptance criteria (at least 2 checks)
- Validation notes (iOS/Android/Web when relevant)

## 3) Pull Requests

Use `.github/pull_request_template.md`.

### PR expectations
- Link the issue (`Closes #<number>`).
- Explain what changed and why.
- Add test/validation notes.
- Include screenshots/recordings for UI changes.
- Call out reviewer focus and follow-up tasks.

### PR size guideline
- Prefer small, single-purpose PRs.
- If a PR grows too much, split it by concern (UI, logic, cleanup).

## 4) Definition of Done

A task is done when:
- Issue acceptance criteria are met.
- Relevant checks were run (`npm run lint` at minimum when applicable).
- PR template is filled with useful context.
- Any AI-generated code/text was reviewed and verified manually.

## 5) AI usage note

AI can speed up drafting and implementation, but final responsibility is manual review for correctness, edge cases, and maintainability.

