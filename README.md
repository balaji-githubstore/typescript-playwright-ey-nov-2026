# TypeScript Playwright Web and API Framework

A Playwright Test framework for browser and API testing using TypeScript, Page Object Model, shared fixtures, and automatic failure diagnostics.

## Prerequisites

- Node.js 20 or later
- npm
- Access to the web application and API being tested

## Setup

```powershell
npm install
npm run browsers:install
Copy-Item .env.example .env
```

Update `.env` with the target application URLs and credentials. Never commit `.env`, tokens, or passwords.

## Commands

```powershell
npm run typecheck
npm run test
npm run test:web
npm run test:api
npm run test:list
npm run test:headed
npm run test:debug
npm run report
npm run clean
```

Run a single test by passing arguments through npm:

```powershell
npm test -- tests/web/example.spec.ts
npm test -- --grep "login"
```

Set an environment variable for one PowerShell session when needed:

```powershell
$env:WEB_BASE_URL = "https://application.example.test"
```

## Planned Structure

```text
config/       Environment and runtime configuration
fixtures/     Typed Playwright fixtures
pages/        Page and component objects
api/          API clients
utils/        Shared test utilities
types/        Request and response contracts
tests/web/    Browser tests
tests/api/    API tests
```

## Framework Conventions

- Keep locators and UI workflows in page or component objects.
- Keep test orchestration and assertions in test specifications.
- Use Playwright `APIRequestContext` for API requests instead of a separate HTTP client.
- Add environment-dependent values to the typed configuration layer, not directly throughout tests.
- Prefer deterministic API setup and `storageState` over repeated UI login for unrelated tests.
- Avoid `test.only`, hard-coded waits, and secrets in source control.

## Failure Artifacts

Failed tests retain screenshots, traces, and video according to `playwright.config.ts`. Test output is written to `test-results/`; the HTML report is written to `playwright-report/`.

```powershell
npm run report
```

Generated reports and artifacts are excluded from source control.

## CI

The CI workflow should install dependencies and Playwright browsers, run `npm run typecheck`, execute tests, and upload `playwright-report/` and `test-results/` even when the test command fails.
