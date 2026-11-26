import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://nasscom.in/",{waitUntil:"networkidle"});

if(await page.locator("xpath=//button[normalize-space()='Accept All']").count()>0)
{
    if(await page.locator("xpath=//button[normalize-space()='Accept All']").isVisible())
    {
        await page.locator("xpath=//button[normalize-space()='Accept All']").click();
    }
}

await page.waitForTimeout(5000);
await browser.close();