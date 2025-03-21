import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  private readonly loginButton = 'button[data-testid="UserProfile-login-button"]';
  private readonly emailInput = 'input[data-testid="email-address-input"]';
  private readonly paymentMethodsSection = '[data-testid="regular-providers-container"]';

  async clickOnLoginButton() {
    await this.page.locator(this.loginButton).click();
  }

  async validateDisplayed() {
    await expect(this.page.locator(this.loginButton)).toBeVisible();
    await expect(this.page.locator(this.emailInput)).toBeVisible();
    await expect(this.page.locator(this.paymentMethodsSection)).toBeVisible();
  }
}
