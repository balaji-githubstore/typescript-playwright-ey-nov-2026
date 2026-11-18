import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.ilovepdf.com/pdf_to_word");

//register page.on filechooser for handling filechooser window
page.on("filechooser",async (fileChooser)=>{
    await fileChooser.setFiles("D:\\Mine\\Balaji Dinakaran Trainer Profile AI 2026.pdf")
})

await page.locator("xpath=//span[text()='Select PDF file']").click();

await page.waitForTimeout(5000);
await browser.close();