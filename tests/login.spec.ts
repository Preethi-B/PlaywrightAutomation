import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.loginAs(
    'rahulshettyacademy',
    'Learning@830$3mK2'
  );

  await expect(page).toHaveURL(/shop/);
});