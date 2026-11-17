import { chromium,firefox } from "playwright";

//BrowserInstance
const browser= await chromium.launch({channel:"chrome",headless:false});

//BrowserContext
const context= await browser.newContext();

//launch the tab
const page=await context.newPage();

await page.goto("https://orangehrm.com/book-a-free-demo");

let actualTitle:string=await page.title();
console.log(actualTitle);

//get the url and print it 
let actualUrl:string=page.url();
console.log(actualUrl);

//get the page source and print it
let actualPageSource:string=await page.content();
console.log(actualPageSource);

await page.waitForTimeout(5000);
await browser.close();



