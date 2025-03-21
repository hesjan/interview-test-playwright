import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

type Period = '2-year plans' | '1-year plans' | '1-month plans';
type Plan = 'Basic' | 'Ultra' | 'Plus' | 'Complete';
export class PricingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly pricingSection = '[data-section="MultipleHighlightedCards"]';
  private readonly getBasicButton = 'a[data-ga-slug="Get Ultra"]:visible';
  private readonly getPlusButton = 'a[data-ga-slug="Get Plus"]:visible';
  private readonly getCompleteButton = 'a[data-ga-slug="Get Complete"]:visible';
  private readonly getUltraButton = 'a[data-ga-slug="Get Ultra"]:visible';
  private readonly planDurationDropdown =
    '[data-testid="pricingPlanDurationDropDown"] select[data-testid="PricingDropdown"]';

  async clickGetBasic() {
    await this.page.locator(this.getBasicButton).click();
  }

  async clickGetPlus() {
    await this.page.locator(this.getPlusButton).click();
  }

  async clickGetUltra() {
    await this.page.locator(this.getUltraButton).click();
  }

  async clickGetComplete() {
    await this.page.locator(this.getCompleteButton).click();
  }

  async selectPlanPeriod(period: Period) {
    await this.page.selectOption(this.planDurationDropdown, { label: period });
  }

  async selectPlan(plan: Plan) {
    switch (plan) {
      case 'Basic':
        await this.page.locator(this.pricingSection).locator(`${this.getBasicButton}`).click();
        break;
      case 'Plus':
        await this.page.locator(this.pricingSection).locator(`${this.getPlusButton}`).click();
        break;
      case 'Ultra':
        await this.page.locator(this.pricingSection).locator(`${this.getUltraButton}`).click();
        break;
      case 'Complete':
        await this.page.locator(this.pricingSection).locator(`${this.getCompleteButton}`).click();
        break;
      default:
        throw new Error(`Unsupported plan type: ${plan}`);
    }
  }

  async validateDisplayed() {
    await expect(this.page).toHaveURL(/.*\/pricing\//);
    await expect(this.page.locator(this.pricingSection)).toBeVisible();
  }
}
