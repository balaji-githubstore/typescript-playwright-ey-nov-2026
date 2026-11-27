## Plan: TypeScript Playwright Web and API Framework

Build a maintainable TypeScript test framework from an empty workspace. Use Playwright Test as the runner for browser and API coverage, Page Object Model for web UI behavior, typed API services built on Playwright's APIRequestContext, and automatic screenshots/traces on failed tests. Keep the starter framework domain-neutral and provide representative tests without assuming real application endpoints.

**Steps**
1. **Bootstrap the project**
   - Create package.json with pinned, compatible versions of @playwright/test, typescript, @types/node, and dotenv.
   - Add npm scripts for install checks, all tests, web tests, API tests, headed/debug runs, type checking, browser installation, report viewing, and artifact cleanup.
   - Create strict tsconfig.json suitable for Playwright and Node, using ES modules consistently (including the package module type).
   - Add .gitignore for node_modules, .env, test-results, playwright-report, screenshots, and other generated artifacts.
   - Add .env.example documenting WEB_BASE_URL, API_BASE_URL, API_TOKEN, HEADLESS, and CI-oriented settings; do not commit secrets.
   - Create README.md with setup, execution, environment configuration, adding a page/API/test, and troubleshooting artifact locations.
2. **Add centralized runtime configuration** (*depends on 1; shared by all test layers*)
   - Create config/environment.ts to load and validate environment-specific values, exposing typed configuration rather than reading process.env throughout the framework.
   - Define browser, API, timeout, retry, and base URL behavior with conservative local defaults and CI overrides.
   - Create playwright.config.ts using testDir, explicit outputDir, forbidOnly on CI, retries on CI, configurable workers, and projects separated by target where useful.
   - Configure HTML, list, and optional JUnit reporters without requiring a third-party reporter.
   - Enable screenshot: 'only-on-failure', trace: 'retain-on-failure' (or 'on-first-retry' when retry policy demands it), and video: 'retain-on-failure'. Let Playwright place screenshots inside each test's output folder; do not rely on nonexistent screenshotDir configuration.
3. **Implement the Page Object Model layer** (*depends on 1-2*)
   - Create pages/base/BasePage.ts containing the shared Page reference and only genuinely reusable behavior, such as navigating through the configured base URL, waiting for readiness, and asserting a URL/path.
   - Create a representative pages/auth/LoginPage.ts with semantic locators declared as readonly fields and user-level actions such as login; keep test expectations in tests, except page-specific readiness checks.
   - Create pages/components for reusable UI fragments if the sample requires them; prefer component objects over duplicating locator/action logic.
   - Add pages/index.ts barrel exports only if it reduces import noise.
   - Enforce POM boundaries: selectors and UI workflows belong in page/component objects; test case orchestration and assertions belong in specs; tests must not manipulate raw DOM selectors directly.
4. **Implement the API client layer** (*parallel with 3; depends on 1-2*)
   - Create api/BaseApiClient.ts wrapping Playwright's APIRequestContext with typed request helpers, base headers, and response parsing/error context.
   - Create one representative domain client, such as api/HealthApi.ts or api/AuthApi.ts, containing endpoint-specific paths and methods rather than test logic.
   - Use request.newContext-style setup where practical and dispose contexts deterministically through fixtures.
   - Keep API assertions in specs using Playwright's expect, including status, headers, and JSON contracts.
   - Add types in types/api/ for request/response shapes; avoid using any.
5. **Add shared fixtures and support utilities** (*depends on 3-4*)
   - Create fixtures/test.fixtures.ts that extends Playwright's base test with typed page objects and API clients.
   - Provide one fixture factory for web tests and one for API tests so each test requests only what it needs.
   - Create fixtures/auth.fixture.ts only if authentication setup is needed; prefer API-based state setup and storageState over logging in through UI for non-login tests.
   - Add utils/test-data.ts for deterministic factories, utils/wait.ts only for justified domain polling, and utils/artifacts.ts only for explicit artifact naming when native screenshots are insufficient.
   - Add utils/expect.ts for reusable domain assertions only; do not create wrappers around basic Playwright expect methods.
6. **Create test examples and failure evidence** (*depends on 2-5*)
   - Create tests/web/smoke.spec.ts to demonstrate fixture injection, page object usage, and assertions against the configured web URL.
   - Create tests/api/health.spec.ts to demonstrate an API fixture, typed response parsing, and HTTP assertions.
   - Keep sample endpoints/selectors isolated in page/API classes so adapting the starter to a real system is localized.
   - Add tests/web/screenshot-on-failure.spec.ts as an opt-in smoke check that can intentionally fail only when explicitly enabled, or validate failure screenshots through a separate shell/fixture test. Avoid putting an always-failing test in the normal suite.
   - Add focused fixture/unit-level validation for environment parsing and deterministic test data when logic is complex enough to warrant it.
7. **Add developer and CI workflow support** (*depends on 1-6*)
   - Add npm commands for web/API subsets, individual test runs, headed mode, debug mode, retries, and report viewing.
   - Add an optional .github/workflows/playwright.yml that installs dependencies and browsers, runs type checking and Playwright, then uploads playwright-report and test-results, including failed-test screenshots, even when tests fail.
   - Document how to run locally on Windows, including PowerShell environment-variable syntax; do not require a Unix shell.
   - Optionally add VS Code task recommendations, but do not depend on a particular editor to execute tests.
8. **Verify the completed framework** (*depends on 1-7*)
   - Install dependencies and browser binaries in the generated project.
   - Run the TypeScript no-emit check.
   - Run representative API and web suites in headless mode using non-secret sample configuration or documented mock services.
   - Deliberately trigger the dedicated failure-artifact check, then confirm test-results contains a PNG screenshot for the failing test and that HTML/trace output is usable.
   - Run the suite once on at least Chromium; expand to Firefox/WebKit only when those projects are enabled and required.
   - Confirm npx playwright test --list discovers intended web/API tests and no intentionally failing check is included in the default suite.

**Relevant files**
- `d:\Mine\Company\EY Nov 2026\GenAIProject\package.json` - dependencies and execution/check/report scripts.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\playwright.config.ts` - projects, reporters, retries, timeouts, screenshots, traces, videos, and output path.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\config\environment.ts` - typed, validated environment configuration.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\fixtures\test.fixtures.ts` - shared Playwright test fixture extension and cleanup boundaries.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\pages\base\BasePage.ts` - common POM navigation/readiness behavior.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\pages\auth\LoginPage.ts` - representative locators and UI workflow.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\api\BaseApiClient.ts` - shared API request methods and error context.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\types\api` - typed API contracts without any.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\tests\web` and `d:\Mine\Company\EY Nov 2026\GenAIProject\tests\api` - web POM and API examples.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\README.md` - setup, commands, conventions, and artifacts.
- `d:\Mine\Company\EY Nov 2026\GenAIProject\.github\workflows\playwright.yml` - optional CI execution and artifact upload.

**Verification**
1. Run `npm run typecheck` and require zero diagnostics.
2. Run `npx playwright test --list` and verify web/API sample tests are discovered.
3. Run `npm run test:api` and verify API requests, parsing, cleanup, and assertions work.
4. Run `npm run test:web` with Chromium and verify POM fixtures and browser navigation work.
5. Enable and run the dedicated intentional-failure artifact test; verify a PNG screenshot exists under the test's output directory and is attached to the HTML report.
6. Run `npm run test` with CI-like settings, including retries where configured, and confirm successful reports and deterministic exit behavior.
7. In CI, confirm failure artifacts upload with `if: always()` and no secrets or `.env` are committed.

**Decisions**
- Scope includes framework scaffolding, POM examples, reusable web/API fixtures, environment configuration, failure artifacts, reporting, documentation, and optional CI.
- Scope excludes implementation of application-specific tests because no application, selectors, endpoints, or business rules exist in the workspace.
- Playwright's built-in request API is preferred over Axios to share configuration and lifecycle with the test runner.
- Default screenshots on failure are delegated to Playwright. Custom screenshot helpers are only for explicitly named diagnostic captures.
- Sample tests should be adaptable examples; executable validation may use a documented mock target when no application target is supplied.
- Multi-browser projects can be scaffolded but need not be run by default until application compatibility requires it.

**Further Considerations**
1. Supply WEB_BASE_URL and API_BASE_URL plus any authentication requirements before converting examples into application tests. Suggested default: provide a local mock server or public test endpoint so initial framework validation is self-contained.
2. Decide whether CI must cover Chromium only or Chromium, Firefox, and WebKit. Recommended default: Chromium for fast pull requests, with the full browser matrix scheduled or on release.
