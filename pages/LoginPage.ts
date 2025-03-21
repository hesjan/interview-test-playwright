import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  private readonly loginInput = 'input[data-testid="identifier-input"][type="email"]';

  async validateDisplayed() {
    await expect(this.page.locator(this.loginInput)).toBeVisible();
  }
}
