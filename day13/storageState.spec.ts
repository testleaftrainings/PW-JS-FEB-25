import test from '@playwright/test'

test(`Get the storage state of LoginPage`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","demoSalesManager")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")
        //store the login cookies
        await page.context().storageState({path:"Data/st_login.json"})

})

