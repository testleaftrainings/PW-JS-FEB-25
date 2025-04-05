import {test as baseTest} from '@playwright/test'

export const test=baseTest.extend<{lpPage,hp:any}>({
    lpPage: async({page},use)=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","demoSalesManager")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")       
        await use(page) //makes the fixture to be available to the test
    },
    hp: async({page})=>{
        await page.click("text=CRM/SFA")
        }
})

