# 🧪 Playwright Test Suite

This project contains automated Playwright tests for UI and API testing of the NordVPN application.

---

## 📂 Project Structure

- `tests/e2e/` – UI tests using Playwright
- `tests/api/` – API tests using Playwright
- `playwright.config.ts` – Playwright test configuration
- `eslint.config.js` – ESLint configuration
- `.prettierrc` – Prettier configuration

---

## 🛠 Requirements

- Node.js **>= 16**
- Playwright **>= 1.40**
- Install dependencies:  
  npm install

---

## 🚀 Running Tests

### **UI Tests**

- 🔹 Run all UI tests:  
  `npm run test:ui`
- 🔹 Run UI tests in headed mode:  
  `npm run test:ui:headed`

### **API Tests**

- 🔹 Run API tests:  
  `npm run test:api`

---

## 🎨 Code Formatting

- 🔹 Check code formatting (`ESLint`):  
  `npm run lint`
- 🔹 Fix formatting issues (`ESLint` + `Prettier`):  
  `npm run lint:fix && npm run format`

---

## 📊 Test Reports

After running tests, you can view the report with:
`npm run report`
This will open an interactive Playwright report in your browser.

---

## 📝 Additional Information

This project includes the automation of the following UI scenario:

1. Open the **NordVPN Landing Page**.
2. Click on one of the **Call-to-Action (CTA)** buttons (specifically selected, not covering all CTAs on the page).
3. On the **Pricing Page**, select a **1-Year Basic Plan**.
4. Proceed to the **Checkout Page**.
5. Navigate back to the **Pricing Page**.
6. Select a **1-Month Ultra Plan** and proceed to the **Checkout Page**.
7. On the Checkout Page, click **Log In** to navigate to the **Login Page**.

**Important Notes:**

- This test does not cover all possible scenarios.
- Only one **CTA** button was selected for the test, and not all available CTAs are covered.
- Only two plans with specific durations were chosen (1-Year Basic and 1-Month Ultra), and this test does not cover all available plans or their lengths.

This project uses:

- Playwright (browser + API testing)
- ESLint (static code analysis) – Configuration in `eslint.config.js`
- Prettier (code formatting)
