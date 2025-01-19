# Project Overview

This repository is designed to implement a robust, maintainable, and scalable Playwright-based testing framework. The folder structure is modular, intuitive, and optimized for both ease of understanding and long-term maintainability.

![QA Automation](public/qa-automation.webp)

---

## Folder Structure
```bash
.
├── config
│   ├── reqres.config.ts
│   └── saucedemo.config.ts
├── data
│   └── credentials.json
├── package.json
├── pages
│   └── login-page.ts
├── pnpm-lock.yaml
├── tests
│   └── e2e
│       └── login.spec.ts
├── tsconfig.json
└── utils
    └── constants.ts
```

---

## Folder and File Descriptions

### 1. **`config/`**
   - Contains environment-specific configuration files for Playwright.
   - **Purpose**: 
     - Simplifies running tests in different environments (e.g., staging, production).
     - Allows easy customization of test behavior via configurations.
   - **Files**:
     - `reqres.config.ts`: Configuration for API tests related to Reqres.
     - `saucedemo.config.ts`: Configuration for E2E tests on the Sauce Demo application.

---

### 2. **`data/`**
   - Stores external test data, such as credentials, test inputs, and expected results.
   - **Purpose**:
     - Centralizes test data, making it easier to update without modifying test scripts.
     - Improves maintainability by decoupling test logic from test data.
   - **File**:
     - `credentials.json`: Contains login credentials, error messages, and other reusable data.

---

### 3. **`pages/`**
   - Implements the Page Object Model (POM) pattern for structuring UI tests.
   - **Purpose**:
     - Enhances test maintainability by encapsulating UI interactions in reusable components.
     - Simplifies test scripts by abstracting page-specific logic.
   - **File**:
     - `login-page.ts`: Contains methods for interacting with the login page (e.g., entering credentials, clicking login).

---

### 4. **`tests/`**
   - Houses all test scripts.
   - **Purpose**:
     - Organizes test cases by category (e.g., API, E2E, regression).
     - Ensures a clean separation of test logic and test framework setup.
   - **Structure**:
     - `e2e/`: End-to-end tests (e.g., `login.spec.ts`).
     - `api/`: Placeholder for API tests (optional, not currently present).

---

### 5. **`utils/`**
   - Contains utility files and reusable constants.
   - **Purpose**:
     - Provides centralized, reusable constants and helper functions to avoid duplication.
     - Simplifies test scripts by abstracting common utilities.
   - **File**:
     - `constants.ts`: Stores constants like URLs or environment settings.

---

### 6. **Root Files**
   - **`package.json`**: Manages project dependencies and scripts.
   - **`pnpm-lock.yaml`**: Lockfile for consistent dependency resolution.
   - **`tsconfig.json`**: TypeScript configuration file for consistent compilation settings.

---

## Key Features of the Folder Structure

### 1. **Reliability**
   - Centralized configuration (`config/`) ensures consistent test execution.
   - Data-driven approach (`data/credentials.json`) avoids hardcoding, reducing errors.

### 2. **Maintainability**
   - Page Object Model (`pages/`) encapsulates UI logic, making it easy to update when the UI changes.
   - Constants (`utils/constants.ts`) centralize reusable values.

### 3. **Scalability**
   - Modular design allows adding more tests (`tests/`) or pages (`pages/`) without disrupting existing ones.
   - Flexible configuration files (`config/`) support new environments with minimal effort.

### 4. **Ease of Understanding**
   - Clear directory naming and organization make the structure intuitive.
   - Separation of concerns (test logic, configuration, data) aids readability.

---

## Example Workflow

### Running Tests
1. Install dependencies:
   ```bash
   pnpm install
    ```
2. Run E2E tests using the saucedemo configuration:
   ```bash
   pnpm exec playwright test --config=config/saucedemo.config.ts
    ```
3. View the report:
   ```bash
   pnpm exec playwright show-report report/html
    ```
---
### Adding New Tests
1. Add test data to `data/`.
2. Create page interactions in `pages/`.
3. Write test cases in `tests/`.

---

### Future Enhancements
- Add API tests in `tests/api`.
- Extend configurations for additional environments.
- Implement logging and test result analysis.

This structure ensures long-term reliability, ease of use, and adaptability as t
