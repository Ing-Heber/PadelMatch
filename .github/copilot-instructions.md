# Copilot Instructions

These instructions apply to the whole repository.

## Goals
- Keep changes small, clear, and easy to review.
- Prioritize app stability on iOS, Android, and Web.
- Prefer readability and maintainability over clever code.

## Project Stack
- Expo + React Native + TypeScript
- Expo Router (file-based routing in `app/`)
- ESLint via `npm run lint`

## Coding Rules
- Follow existing patterns before introducing new ones.
- Keep TypeScript types explicit when behavior is not obvious.
- Avoid adding new dependencies unless clearly justified.
- Keep UI components focused and reusable.
- Do not change unrelated files in the same task.

## Workflow Rules
- Use the issue and PR templates in `.github/`.
- Follow commit, issue, and PR conventions in `DEV.md`.
- For behavior changes, include a short validation note for platforms impacted (`iOS`, `Android`, `Web`).
- If unsure about product behavior, ask for clarification instead of guessing.

## Context Files
Use these context files before implementing non-trivial changes:
- `docs/ai/README.md`
- `docs/ai/context-project.md`
- `docs/ai/context-workflow.md`

