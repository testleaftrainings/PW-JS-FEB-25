import test from "@playwright/test";
/**
 * Login Functionality
 Load the url http://leaftaps.com/opentaps/control/main
 enter username as demoSalesManager
 enter password as crmsfa
 Click on the Login button
 verify the landing page 
 */

test(`Learning basic CSS selector`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Locate username field and type in the value
    await page.locator(`input[id="username"]`).fill("demoSalesManager")
    //locate password ele and type in the value
    await page.locator("#password").fill("crmsfa")
    //click on the login button
    await page.locator(".decorativeSubmit").click()
    //verify the title
    const title = await page.title()
    console.log(title)
    await page.waitForTimeout(3000)
    //locate the element with text
    await page.locator("text=CRM/SFA").click()
})


