
import { test, expect } from '@playwright/test';

test('visual Comparision test', async ({ page }) => {
  await page.goto('https://www.testleaf.com');
  await expect(page).toHaveScreenshot();
});


test.only(`Console logs `,async({page})=>{
    page.on('console',logs=>{
        console.log("<<--Logging the errors-->>",logs.text(),logs.type())
    })

    await page.goto("https://www.redbus.in/")
})