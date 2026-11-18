import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.nasscom.in/nasscom-membership");

//Playwright auto-handles the alert 
//before generating alert - we need to modify the existing behaviour of alert

//modified default behaviour of alert to print alert message and accept using page.on 
page.on("dialog", async (dialog) => {
    let actualAlertText = dialog.message();
    console.log(actualAlertText);
    await dialog.accept();
});

//click on calculatefee
await page.locator("xpath=//a[text()='Calculate Fee']").click();

await page.waitForTimeout(5000);
await browser.close();