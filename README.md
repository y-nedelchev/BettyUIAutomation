# Betty UI Automation (Playwright + TypeScript)

Automation test repository for the Betty SDET UI task.

## Scope

This project implements a lightweight Playwright framework and automated UI validations for:
- Home page checks (game tiles / logos / play buttons)
- Game URL validation per configured test data
- Gameplay validation (spin) verifying balance is updated when the stake is deducted

The tests run in:
- Desktop (Desktop Chrome)
- Mobile emulation (iPhone 14 device profile)

## Tech Stack

- Playwright Test
- TypeScript
- Page Object Model (POM) style via `PageManager`

## Project Structure

- `tests/`
    - `regression.spec.ts` - TC01/TC02/TC03 scenarios
- `src/`
    - `pages/` - page objects
    - `test-data/` - game configs (name + expected URL)
- `fixtures.ts` - shared fixtures (navigation + cookie acceptance)
- `playwright.config.ts` - configuration + desktop/mobile projects
- `evidence/` - proof of execution (terminal screenshot + full log)

## Prerequisites

- Node.js (LTS recommended)
- npm

## Install

```bash
npm ci
npx playwright install
