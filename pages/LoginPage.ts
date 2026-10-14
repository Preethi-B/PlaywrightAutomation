import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
   readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.locator('#signInBtn');
    this.errorMessage = page.locator('.alert-danger');
    this.successMessage = page.locator('.alert-primary');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

   async loginAs(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  await this.page.context().storageState({ path: 'storageState.json' });
    
  }

}