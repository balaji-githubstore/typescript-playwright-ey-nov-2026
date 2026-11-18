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

await vehicleFrame.locator("xpath=//input[@name='vehicleName']").fill("Tata");
await vehicleFrame.locator("xpath=//input[@name='ownerName']").fill("Dharshini");
await vehicleFrame.locator("xpath=//input[@name='regNumber']").fill("TN67A1234");
await vehicleFrame.locator("xpath=//select[@name='vehicleType']").selectOption("Electric");
await vehicleFrame.locator("xpath=//input[@name='year']").fill("2026");
await vehicleFrame.locator("xpath=//textarea[@name='notes']").fill("Test registration");
await vehicleFrame.locator("xpath=//button[@id='vehicle-submit']").click();

//get the json generated and print it in the console
const actualValue:string= await vehicleFrame.locator("xpath=//div[@id='vehicle-output']").innerText();
console.log(actualValue);
await page.waitForTimeout(5000);
await browser.close();