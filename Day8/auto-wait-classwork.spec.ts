import { expect, test } from "@playwright/test";



test(`02_Auto waits : Wait for Invisibility`, async({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");

    let card2 =  page.locator(".card").filter({hasText:'Wait for Invisibility'});
    await card2.getByRole("button",{name:'Click'}).click();

    await expect(card2.getByRole("button",{name:'I am about to hide'})).toBeHidden({timeout:10000});

})


