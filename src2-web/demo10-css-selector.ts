import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://demo.openemr.io/b/openemr/interface/login/login.php?site=default");

await page.locator("css=#authUser").fill("admin");
await page.locator("css=select[name='languageChoice']").selectOption({label:"Bengali"});

await page.waitForTimeout(5000);
await browser.close();