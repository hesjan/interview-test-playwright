import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OfferPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  private readonly OFFER_PATH = '/offer';
  private readonly getNordVpnHeaderButton = '[data-section="Header"] a[aria-label="Get NordVPN"]';
  private readonly getNordVpnMainButton = '.cta-wrapper a';
  private readonly tableCta = 'table a[data-ga-slug="Get the Deal"]';
  private readonly getExtraSavingsButton = 'a[data-ga-slug="Get Extra Savings"]';
  private readonly getTheDealButton =
    '[data-section="Feature2ColAsset - Left"] a[data-ga-slug="Get the Deal"]';
  private readonly acceptConsentButton = 'button[data-testid="consent-widget-accept-all"]'
  async navigate() {
    await super.navigate(this.OFFER_PATH);
  }

  async clickOnGetNordVpnButton() {
    await this.page.locator(this.getNordVpnMainButton).click();
  }

  async acceptPrivacyConsent() {
    await this.page.locator(this.acceptConsentButton).click();
  }
}
