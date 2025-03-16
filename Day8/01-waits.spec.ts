
import { expect, test } from "@playwright/test";

test(`Test to assert the web element on the page`, async ({page})=> {

await page.goto(`https://leafground.com/waits.xhtml`);

const cardToselect = page.locator(".card").filter({hasText:"Wait for Visibility"});
const buttonToClick = cardToselect.getByRole("button").filter({hasText:"Click"});
buttonToClick.click();


//Locator chaining

await page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").click();
//Assertion 
await expect(page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:8000});

    
})