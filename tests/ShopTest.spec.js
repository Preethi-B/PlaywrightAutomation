import { test, expect } from '@playwright/test';

test.describe('Shopping cart Scenarios', () => {
  test('should open the shop page', async ({ page }) => {
    await page.goto(
      'https://rahulshettyacademy.com/angularpractice/shop'
    );

    await expect(page).toHaveURL(/shop/);
  });
  
  test('Verify that product cards are displayed on the shop page', async ({ page }) => {
    await page.goto(
      'https://rahulshettyacademy.com/angularpractice/shop'
    );

    const productCards = page.locator('.card');

    await expect(productCards.first()).toBeVisible();

    const productCount = await productCards.count();

    console.log(`Number of products displayed: ${productCount}`);

    expect(productCount).toBeGreaterThan(0);
  });
  
  test('Verify and print all product names displayed on the shop page', async ({ page }) => {
    await page.goto(
      'https://rahulshettyacademy.com/angularpractice/shop'
    );

    const productNames = page.locator('.card-title a');

    await expect(productNames.first()).toBeVisible();

    const products = await productNames.allTextContents();

    console.log('Products displayed in the shop:');

    for (const product of products) {
      console.log(product.trim());
    }

    expect(products.length).toBeGreaterThan(0);
  });
});