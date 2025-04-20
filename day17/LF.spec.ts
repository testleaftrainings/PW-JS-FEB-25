import {test} from './retryLogic'
test(`Learn custom retry`,async({page})=>{
 await page.goto("http://leaftaps.com/opentaps/control/main")
 await page.fill("#username","demoCSR")
 await page.delayedType("#passwor","crmsfa")
 await page.cickAnddelay(".decorativeSubmit")
})