import { chromium,firefox } from "playwright";


const browser= await chromium.launch({channel:"chrome",headless:false});
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/");

//run pop event without await to track for new page
const popupPromise=page.waitForEvent("popup");
//click on element that opens new tab
await page.locator("xpath=//a[contains(text(),'OrangeHRM')]").click();
//await and get the new page (new tab) from the method running in the background
const page2=await popupPromise


await page2.locator("xpath=//button[text()='Book a Free Demo']").click();
//print the title of tab 2
console.log(await page2.title());
await page2.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John wick");
//enter fullname as John wick

await page.waitForTimeout(5000);
await browser.close();


