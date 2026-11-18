import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/");

const [page2,] = await Promise.all([page.waitForEvent("popup"),
page.locator("xpath=//a[contains(text(),'OrangeHRM')]").click()])

await page2.locator("xpath=//button[text()='Book a Free Demo']").click();
//print the title of tab 2
console.log(await page2.title());
await page2.locator("xpath=//input[@id='Form_getForm_FullName']").fill("John wick");


await page.waitForTimeout(5000);
await browser.close();