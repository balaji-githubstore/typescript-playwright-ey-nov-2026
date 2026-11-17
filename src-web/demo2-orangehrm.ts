import { chromium,firefox } from "playwright";


const browser= await chromium.launch({channel:"chrome",headless:false});
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://orangehrm.com/book-a-free-demo");

//click on allow cookies 
await page.locator("xpath=//button[text()='Allow all']").click();

await page.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John wick");
await page.locator("xpath=//input[@id='Form_getForm_Email']").fill("john@gmail.com");

//enter phone number as 8989898
//enter company name as EY
//enter job title as QA
await page.locator("xpath=//input[@id='Form_getForm_Contact']").fill("9873672782");
await page.locator("xpath=//select[@id='Form_getForm_Country']").selectOption({label:"Hong Kong"});
await page.locator("xpath=//input[@id='Form_getForm_CompanyName']").fill("EY");
await page.locator("xpath=//input[@id='Form_getForm_JobTitle']").fill("QA");

//select employee as 11 -50
await page.locator("#Form_getForm_NoOfEmployees").selectOption({label: "11 - 50"});

//click on get a free demo
await page.locator("xpath=//input[@id='Form_getForm_action_submitForm']").click();

await page.waitForTimeout(5000);
await browser.close();
