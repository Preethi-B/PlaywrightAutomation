import { test, expect } from '@playwright/test';
import { ShopPage } from '../pages/Shoppage';



test('add products to cart and verify checkout', async ({ page }) => {
  const shopPage = new ShopPage(page);
  await shopPage.goToShop();

  await shopPage.addProductToCart('Blackberry');
  await shopPage.addProductToCart('Nokia Edge');



  await shopPage.openCart();
  await shopPage.verifyProductInCart('Blackberry');
  await shopPage.verifyProductInCart('Nokia Edge');

  await shopPage.clickCheckout();
});