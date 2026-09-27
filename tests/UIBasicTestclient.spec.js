const{test,expect} = require('@playwright/test');




test('Third test case',async ({page})=>{

const cadtitles = page.locator(".card-body b");
await page.goto("https://rahulshettyacademy.com/client/")
await page.locator("#userEmail").fill("preethi.sathya@gmail.com");
await page.locator("#userPassword").fill("Test@4me");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
const allTitles = await cadtitles.allTextContents();
console.log(allTitles);})


test('UI Controls',async ({page})=>{


await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title());
const dropdown = page.locator("select.form-control");
await page.locator("#username").fill("rahulshetty");
await page.locator("#password").fill("learning");
await dropdown.selectOption("consult");
await expect(page.locator(".radiotextsty").last().click());
await expect(page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#okayBtn").click();
await page.locator("#terms").click();
await expect(page.locator("#terms").last()).toBeChecked();
await page.locator("#signInBtn").click();})
//await expect(page.locator(".card-body b")).toHaveText(["iphone X","Samsung Note 8","Nokia Edge","Blackberry"]);