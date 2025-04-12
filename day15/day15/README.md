## Table of Contents

- [Design Patterns in Test Automation](#design-patterns-in-test-automation)
- [Introduction to Page Object Model (POM)](#introduction-to-page-object-model-pom)
- [Playwright Framework Structure](#playwright-framework-structure)
- [Framework Best Practices](#framework-best-practices)
- [Custom Fixtures](#custom-fixtures)

## Playwright Framework Structure

### Recommended Folder Structure
A well-organized framework helps maintain scalability and ease of use. Here's a recommended structure:

```plaintext
project-root/
├── tests/                 # Test files
│   ├── example.spec.js    # Example test file
│   ├── login.spec.js      # Login test file
│   ├── ...
├── utils/                 # Utility functions
│   ├── helpers.js         # Helper functions
│   ├── api-utils.js       # API-related utilities
├── fixtures/              # Test data and fixtures
│   ├── test-data.json     # Static data
│   ├── ...
├── config/                # Configuration files
│   ├── playwright.config.js # Playwright config
│   ├── environment.js     # Environment-specific configs
├── reports/               # Test reports
│   ├── html/              # HTML reports
│   ├── logs/              # Logs
├── traces/                # Playwright traces
│   ├── trace1.zip         # Trace files for debugging
├── screenshots/           # Failure screenshots
│   ├── screenshot1.png    # Example screenshot
└── package.json           # Project dependencies
```

### Key Files
- **`playwright.config.js`**: Central configuration file for browser settings, test timeouts, and more.
- **Test Files**: Each test file should be independent and focused on a specific feature.
- **Utilities**: Common functions or modules that can be reused across multiple tests.
- **Fixtures**: Predefined data or states to support test execution.

### Example Configuration
```javascript
module.exports = {
    testDir: './tests',
    timeout: 30000,
    retries: 2,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'on',
        trace: 'on',
    },
};
```
## Design Patterns in Test Automation

Design patterns are reusable solutions to common problems in test automation. They help in organizing code, making it maintainable, and improving readability. Below are some commonly used design patterns in test automation:

| Design Pattern           | Purpose                                        | Usage in Automation Frameworks                                      |
|--------------------------|------------------------------------------------|---------------------------------------------------------------------|
| **Page Object Model (POM)** | Separates page-specific logic from test cases, making tests easier to read and maintain. | Manages UI interactions through page classes.                       |
| **Factory Pattern**      | Creates objects dynamically without specifying the exact class. | Used for generating test data or page objects based on conditions.  |
| **Singleton Pattern**    | Ensures only one instance of a class exists.   | Manages a single instance of resources, like browser or database.   |
| **Command Pattern**      | Encapsulates actions as objects.               | Defines reusable test actions (e.g., login, logout).                |
| **Data-Driven Testing (DDT)** | Runs tests with multiple data sets.      | Allows testing multiple scenarios by using external data sources.   |
| **Adapter Pattern**      | Bridges incompatible interfaces.               | Integrates third-party tools or legacy code into the framework.     |
| **Decorator Pattern**    | Adds functionality to objects without altering their core behavior. | Adds features like logging and retries to test actions.             |

## Introduction to Page Object Model (POM)

The **Page Object Model (POM)** is a design pattern that structures test automation code by creating a separate class, called a “page object,” for each page or component of an application. POM simplifies code by centralizing element locators and actions in a single place, making test scripts cleaner, easier to maintain, and more readable.

#### Benefits of POM
- **Modularity**: Keeps UI locators and actions separate from test scripts, making them modular and reusable.
- **Maintainability**: Updates to locators and actions can be made in one place when the UI changes.
- **Readability**: Test cases are cleaner and focus on test logic rather than UI interaction details.

#### Example Structure of a Page Object (TypeScript)

```typescript
import { Page } from 'playwright';

class LoginPage {
    private page: Page;
    private usernameField = '#username';
    private passwordField = '#password';
    private loginButton = '#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    public async setUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameField, username);
    }

    public async setPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordField, password);
    }

    public async login(username: string, password: string): Promise<void> {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.page.click(this.loginButton);
    }
}
```

In this example, the `LoginPage` class encapsulates locators and actions for the login page. Test cases can use this class to interact with the login page without directly accessing locators.

## Framework Best Practices

A well-structured framework improves the efficiency and reliability of test automation. Below are best practices for building and maintaining a robust framework:

#### 1. **Follow Design Patterns**
   - Implement patterns like **POM**, **Singleton**, and **Data-Driven Testing** to keep code organized and reusable.

#### 2. **Organize Code by Modules**
   - Use folders to separate tests, page objects, utilities, and configurations.
   - Each folder should have a clear purpose, making the framework easy to navigate and manage.

#### 3. **Use Base Configuration**
   - Set up a global configuration file for browser settings, timeouts, retries, and environment-specific settings to centralize configurations.

#### 4. **Implement Logging and Reporting**
   - Integrate logging to capture details for each test run.
   - Use reporting tools (e.g., Playwright’s built-in reporters or Allure) to generate comprehensive test reports.

#### 5. **Manage Test Data**
   - Store test data in separate files, allowing easy updates without modifying test logic.
   - Use environment variables to securely store sensitive data like credentials.

#### 6. **Leverage Playwright’s Features**
   - **Auto-waiting**: Playwright automatically waits for elements, reducing the need for manual waits.
   - **Browser Contexts**: Isolate tests using browser contexts, making parallel execution efficient.
   - **Trace Viewer and Video Recording**: Enable for debugging and tracking tests.

#### 7. **Enable Parallel Test Execution**
   - Use Playwright’s native parallel execution to run multiple tests simultaneously. Design tests to avoid conflicts in shared data or resources.

#### 8. **Set Up Continuous Integration (CI)**
   - Integrate the framework with a CI/CD pipeline (e.g., GitHub Actions, Jenkins) to run tests automatically on code changes.

#### 9. **Isolate Test State**
   - Each test should reset the application state to remain independent. Use Playwright hooks (`beforeEach`, `afterEach`) to manage setup and cleanup.

#### 10. **Regularly Update and Refactor**
   - Periodically update locators, configurations, and libraries. Refactor code to remove redundancies and improve readability.

---

By following these design principles and best practices, your test automation framework will be scalable, maintainable, and efficient, helping to support high-quality test coverage as your application grows.

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
