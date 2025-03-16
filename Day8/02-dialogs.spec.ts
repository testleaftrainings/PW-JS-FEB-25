

import {test } from "@playwright/test"

/* test(`Test to handle alerts/ dialogs`, async({page})=>{

await page.goto(`https://leafground.com/alert.xhtml`)

//Simple alert
await page.locator("text=Show").first().click();
await page.waitForTimeout(5000);


//Confirm alert
await page.locator(".card").filter({hasText :"Confirm Dialog"}).locator("//span[text()='Show']").click();
await page.waitForTimeout(5000);

//Prompt alert/ dialog

const cardLocator = page.locator(".card").filter({hasText:"Prompt Dialog"});
await cardLocator.locator("button").filter({hasText:"Show"}).click()
await page.waitForTimeout(5000);

}) */

test(`Test to handle the dialog using page.on event listeners`, async({page})=>{

    await page.goto(`https://leafground.com/alert.xhtml`);

    //Event listener
page.on('dialog',async(dialog:any)=>{

const message= dialog.message();
console.log(message);

const type = dialog.type();
console.log(`The type pf alert ${type}`);

if(type==='confirm'){
await dialog.accept();
}
else if(type==='prompt'){
    await dialog.accept("Ravindran");
} else

dialog.dismiss();
})

//Simple alert
await page.locator("text=Show").first().click();
await page.waitForTimeout(5000);


//Confirm alert
await page.locator(".card").filter({hasText :"Confirm Dialog"}).locator("//span[text()='Show']").click();
await page.waitForTimeout(5000);

//Prompt alert/ dialog

const cardLocator = page.locator(".card").filter({hasText:"Prompt Dialog"});
await cardLocator.locator("button").filter({hasText:"Show"}).click()
await page.waitForTimeout(5000);

}

)

test.only(`Test to handle the dialog using page.once event listeners`, async({page})=>{

    await page.goto(`https://leafground.com/alert.xhtml`);

    //Event listener
page.once('dialog',async(dialog:any)=>{

const message= dialog.message();
console.log(message);

const type = dialog.type();
console.log(`The type pf alert ${type}`);

if(type==='confirm'){
await dialog.accept();
}
else if(type==='prompt'){
    await dialog.accept("Ravindran");
} else

dialog.dismiss();
})

//Simple alert
await page.locator("text=Show").first().click();
await page.waitForTimeout(5000);


//Confirm alert
await page.locator(".card").filter({hasText :"Confirm Dialog"}).locator("//span[text()='Show']").click();
await page.waitForTimeout(5000);

//Prompt alert/ dialog

const cardLocator = page.locator(".card").filter({hasText:"Prompt Dialog"});
await cardLocator.locator("button").filter({hasText:"Show"}).click()
await page.waitForTimeout(5000);

}

)