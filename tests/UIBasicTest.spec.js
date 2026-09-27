import { test, expect } from '@playwright/test';

test.describe('Locator strategies - Rahul Shetty Academy Login Practice', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  });
    
    


test('fill the login form using ID locators', async ({ page }) => {
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();
  await expect(page).toHaveURL(/.*shop/);
});

test('locate the error message on invalid login', async ({ page }) => {
  await page.locator('#username').fill('wrongUser');
  await page.locator('#password').fill('wrongPass');
  await page.locator('#signInBtn').click();
  const error = page.locator('.alert-danger'); // class-based locator
  await expect(error).toBeVisible();
  await expect(error).toHaveText('Incorrect username/password.');
});
})