
import { chromium, firefox, test } from "@playwright/test";

test("Launch browser", async ({})=>{ 

 const browser= await firefox.launch({headless:false});

    const context = await browser.newContext();

    const page = await context.newPage(); 

    await page.goto("http://leaftaps.com/opentaps/control/main");

    console.log(`The title of the page is ${ await page.title()}`);
    
    console.log(`The title of the page is ${ page.url()}`);

/*     await page.close();

    await context.close();

    await browser.close(); */


   })