import { Page, Locator, expect } from '@playwright/test';

export class ShopPage {
  readonly page: Page;
  //readonly shopLink: Locator;
  readonly cartIcon: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    //this.shopLink = page.getByRole('link', { name: 'Shop' });
    this.cartIcon = page.locator('a.nav-link.btn-primary');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });;
  }

  async goToShop() {
     await this.page.goto('/angularpractice/shop');
  }

  async addProductToCart(productName: string) {
    const card = this.page.locator('app-card', {
      has: this.page.locator(`.card-title a:text-is("${productName}")`),
    });
    await card.locator('button.btn-info').click();
  }



  async openCart() {
    await this.cartIcon.click();
  }

  async verifyProductInCart(productName: string) {
    await expect(
      this.page.locator(`h4.media-heading a:text-is("${productName}")`)
    ).toBeVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}