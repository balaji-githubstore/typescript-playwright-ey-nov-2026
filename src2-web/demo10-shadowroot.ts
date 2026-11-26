import { chromium, firefox } from "playwright";


const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");

//only css and playwright default methods works on shadowroot

//enter firstname
await page.locator("css=input[name='firstName']").fill("john");

//enter lastname 
await page.locator("css=input[name='lastName']").fill("wick");

//company size - 201-500 
await page.locator("css=select[name='employees']").selectOption({label:"201-500 employees"});

//click on start my trial 
//await page.locator("css=button[aria-label='Start my free trial: Sales']").click();
//or
// await page.locator("text=Start my free trial").click();
//or
// await page.getByText("Start my free trial").click();
//or 
//text contains
await page.getByText("my free trial",{exact:false}).click();

//get Enter valid phone number error message and print it 
const actualError=await page.getByText("valid phone",{exact:false}).innerText();
console.log(actualError)

await page.waitForTimeout(5000);
await browser.close();