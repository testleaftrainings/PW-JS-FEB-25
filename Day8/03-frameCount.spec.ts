

import {test } from "@playwright/test";

test(`Test to interact with the frames`, async({page})=>{

await page.goto(`https://www.oneindia.com/`);

//To get the frames

const allFrame = page.frames();

console.log(allFrame);
//To get the count of frames
const frameCount = allFrame.length;

console.log(`The number of frames is ${frameCount}`);


for(let iframe of allFrame){
const title = await iframe.title();

console.log(`The titles fo the frames are ${title}`);

}

await page.waitForTimeout(30000)
})
