

import { expect, test } from "@playwright/test";

test ('Test to assert the text box', async ({page}) => {


    await page.goto(`https://leafground.com/input.xhtml`);
    const typeName = page.getByPlaceholder(`Babu Manickam`);
    //to chek the textbox is enabled or not
    await expect(typeName).toBeEnabled({timeout:10000});

    await typeName.fill("Ravindran")
    await page.waitForTimeout(3000)
    
    const disabledTextBox = page.getByPlaceholder(`Disabled`);
    //to chek the textbox is enabled or not
    await expect(disabledTextBox).toBeDisabled({timeout:10000});
    await page.waitForTimeout(3000)
})

/* test (`Assertion using hard assertion`, async ({page}) => {
    
    await page.goto(`https://leafground.com/input.xhtml`);

    const appendTextBox = page.locator(`//input[@value='Chennai']`);
    await expect(appendTextBox).toBeEnabled();
    await appendTextBox.fill("Bangalore")
    await page.waitForTimeout(3000)
})

test (`Assertion using hard assertion1`, async ({page}) => {
    
    await page.goto(`https://leafground.com/input.xhtml`);

    const appendTextBox = page.locator(`//input[@value='Chennai']`);
    await expect.soft(appendTextBox).toBeDisabled();
    await appendTextBox.fill("Bangalore")
    await page.waitForTimeout(3000)
}) */