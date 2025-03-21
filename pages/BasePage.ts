import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(`${path}`);
  }
}
