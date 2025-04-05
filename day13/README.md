## Table of Contents

1. [Hooks](#hooks)
2. [storage state](#storagestate)
3. [Persistent Context](#persistent-context)
4. [Code Gen](#code-gen)
5. [Custom Fixtures](#custom-fixtures)

## Hooks

### Overview
- Hooks are special methods in Playwright that are used to set up and tear down test environments.

### Types of Hooks
- **`beforeAll`**: Runs once before all tests in a file.
- **`afterAll`**: Runs once after all tests in a file.
- **`beforeEach`**: Runs before each test.
- **`afterEach`**: Runs after each test.

### Use Cases
- **Setup/Teardown**: Use hooks to initialize and clean up resources (e.g., launching browsers, closing databases).
- **Data Preparation**: Use hooks to prepare test data or reset application state before each test.

## Storage State Using test.use()

Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

##  Use Cases
Logging in once and testing multiple protected pages.
Sharing the same state across test suites in CI/CD pipelines.
Simulating authenticated and unauthenticated users in tests.

### Example

```javascript
test(`StorageState`,async({page})=>{
 await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
     await page.context().storageState({path:"state.json"})
})
 
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
  ```


## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();

```
## Code Gen

### Description
Playwright offers a code generation tool that records your browser interactions and generates code based on those actions. This can help in quickly creating test scripts by simply performing the desired actions in a browser.

### Use Case
Code generation is useful for quickly scaffolding test scripts, especially for complex user interactions. It helps in reducing the time and effort required to write initial test scripts from scratch.

### Example
Run the following command to start the code generator:
bash
npx playwright codegen https://www.amazon.in

This will open a browser where you can perform actions. Playwright will generate the corresponding code in real-time.


## Custom Fixtures

### Overview
Custom fixtures allow you to set up reusable configurations or components, such as logging in or initializing database states, to avoid repeating setup steps in each test.

### Fixture Logic

1. **Define Custom Logic**: Define custom actions, such as login, in a fixture.
2. **Usage**: Use the fixture across multiple tests to start tests in a predefined state, like being logged in.

```typescript
pageWithLogin: async ({ page }, use) => {
    await page.goto("https://amazon.com/login");
    await page.fill("#username", "testuser");
    await page.fill("#password", "password123");
    await page.click("#loginButton");
    await use(page); // Makes this logged-in page available for tests
};
```

With this logic, any test using the `pageWithLogin` fixture will start with a logged-in session, reducing setup code repetition.

---
