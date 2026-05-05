# State/Form Foundation Case

## Purpose
This note captures the minimal starter pattern for state and form handling in PadelMatch.

## What was added
- `zustand` for lightweight shared state through `stores/app-store.ts`.
- `react-hook-form` for local form state in the Storybook dependency smoke example.
- A Storybook example in `.rnstorybook/stories/foundations.stories.tsx` to verify both dependencies can be used together without changing the default app flow.

## Why Storybook was chosen first
- Keeps the Expo Router app entry clean while the architecture is still early.
- Gives a small, reviewable example for future auth and scheduling work.
- Reduces the chance of adding app-level abstractions before a real cross-screen need exists.

## Current limits
- This is not production auth or scheduling logic.
- The store intentionally contains only a tiny sample field and actions.
- No root providers were added because neither dependency requires them for the current baseline.

## Likely next uses
- Auth sign-in/sign-up forms can reuse the `react-hook-form` pattern.
- Scheduling drafts or lightweight shared UI state can expand from the `zustand` store pattern.
- If multiple areas need structured global state, revisit store organization by feature instead of growing a single app store too early.

