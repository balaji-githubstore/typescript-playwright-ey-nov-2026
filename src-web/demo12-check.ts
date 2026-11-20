import { chromium, firefox } from "playwright";
 
 
const browser = await chromium.launch({ channel: "chrome", headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.nasscom.in/nasscom-membership");

//await page.getByText(" Accept All ").click();

await page.locator('a[title="Expand menu Membership"]').hover();
await page.locator('//nav[@aria-label="New Main navigation"]//li/a[text()="Become a Member"]').click();

await page.locator('select[name="field_company_type"]').selectOption("Indian");
await page.locator('select[name="field_state_member"]').selectOption("Tamil Nadu");
await page.locator('select[name="field_city_membership"]').selectOption("Chennai");
await page.locator('textarea[placeholder="Address*"]').fill("anna nagar, Chennai");

// await page.getByRole('checkbox', { name: 'Co-innovation with Start Ups' }).check();
// await page.getByRole('checkbox', { name: 'Engagement on key policy' }).check();
// await page.getByRole('checkbox', { name: 'Access to industry insights' }).check();
await page.locator('input[placeholder="Total Employees (Nos.)*"]').fill("800");

await page.locator('#edit-field-total-employees-year').selectOption('FY 2025-26');
page.on("dialog",async(dialog)=>{
    let actualAlertText=dialog.message();
    console.log(actualAlertText);
    await dialog.accept();
})
await page.locator('a[id="calculate-fee"]').click();



// await page.locator('input[data-drupal-selector="edit-field-additional-document-0-upload"]').setInputFiles("C:\\Users\\Administrator\\Downloads\\TypeScriptDataType.pdf")

await page.locator('input[name="field_mem_code_of_conduct[0]"]').check();
await page.locator('input[name="field_mem_code_of_conduct[1]"]').check();

await page.locator('input[id="edit-submit"]').click();


 
await page.waitForTimeout(10000);
await browser.close();