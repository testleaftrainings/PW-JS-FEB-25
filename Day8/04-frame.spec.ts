import { test } from "@playwright/test";

test(`Test to interact with the frames`, async ({page}) => {
    

    await page.goto(`https://leafground.com/frame.xhtml`);

    //Interact with the iframe using url

    const frame = page.frame({url:"https://leafground.com/default.xhtml"})
    frame?.click('#Click');
    /* 

    Conditional check
    if (frame!==null){
    Select the frame
    Click the button
    }
    
    frame?true:false
    */
   //using index
   const framesA = page.frames();
   await framesA[4].click("button#Click");
   await page.waitForTimeout(30000);

})

test.only(`Test to interact with iframes using frame locator`, async ({page}) => {

    await page.goto(`https://leafground.com/frame.xhtml`);
    //using framelocator

    const frameLoc = page.frameLocator("(//iframe)[2]");
    frameLoc.locator("#Click").click()

    //Interact with nested frames
    const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click()

    await page.waitForTimeout(30000)
        
})