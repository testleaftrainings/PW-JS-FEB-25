import test from '@playwright/test';

test(`Launching browser wiht pageFixture`,async({page})=>{  
 await page.goto('https://www.google.com')
 const title= await page.title()
 console.log(title) 
})