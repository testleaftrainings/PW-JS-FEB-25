import test from "@playwright/test";

test(`Learn custom retry`,async({page})=>{
 await page.goto("http://leaftaps.com/opentaps/control/main")
 await page.fill("#username","demoCSR")
 await page.fill("#password","crmsfa")
 await page.cickAnddelay(".decorativeSubmit")
})