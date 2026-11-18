import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://app.thetestingacademy.com/playwright/frames/");

//get the frame
const vehicleFrame=page.frameLocator("xpath=//iframe[@name='vehicle-form']")

await vehicleFrame.locator("xpath=//input[@name='vehicleName']").fill("tata");

//enter owner name as john
//enter registration detail TN13Aj348
//select vehicle type as hatchback
//year 2026
//enter notes as new vehicle
//submit the registration



await page.waitForTimeout(5000);
await browser.close();