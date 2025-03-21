import { test } from '@playwright/test';
import { OfferPage } from '../../pages/OfferPage';
import { PricingPage } from '../../pages/PricingPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { LoginPage } from '../../pages/LoginPage';

test.describe('NordVPN User Flow Test', () => {
  test('navigation from Landing Page to Pricing, selecting different plans, and validating Login', async ({
    page,
  }) => {
    const offerPage = new OfferPage(page);
    const pricingPage = new PricingPage(page);
    const checkoutPage = new CheckoutPage(page);
    const loginPage = new LoginPage(page);

    await offerPage.navigate()
    await offerPage.acceptPrivacyConsent();
    await offerPage.clickOnGetNordVpnButton();
    await pricingPage.validateDisplayed();
    await pricingPage.selectPlanPeriod('1-year plans');
    await pricingPage.selectPlan('Basic');

    await checkoutPage.validateDisplayed();
    await page.goBack();
    await pricingPage.validateDisplayed();
    await pricingPage.selectPlanPeriod('1-month plans');
    await pricingPage.selectPlan('Ultra');
    await checkoutPage.validateDisplayed();
    await checkoutPage.clickOnLoginButton();
    await loginPage.validateDisplayed();
  });
});
