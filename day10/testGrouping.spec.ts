import test from '@playwright/test'

let crm: any

test.describe(`Lead Module`, async () => {
    test.describe.configure({ mode: 'serial', retries: 1 })
    test(`test1`, async () => {
        //viewlead -->findLead edit lead
        console.log("Test 1 is executed successfully")

    })

    test(`test 2`, async ({ page }) => {
        //create a  lead
        await page.goto("http://leaftaps.com/opentaps/control/main")
        test.step(`enterUsername as demoCSR`, async () => {
            await page.fill("#username", "demoCSR")
            await page.fill("#password", "crmsfa")
            await page.click(".decorativeSubmit")
            const crmLik = page.locator('text=CRM/SFA')
            await crmLik.innerText()
            await crmLik.click()
        })
    })

    test(`test3`, async () => {
        //viewlead -->findLead edit lead
        console.log(crm)

    })

    test(`test4`, async () => {
        //viewlead -->findLead edit lead
        console.log(crm)

    })

})

test.describe(`Module:2`, async () => {

    test.describe.configure({ mode: 'parallel' })

    test(`test1 with modul2`, async ({ page }) => {
        await page.goto("http://www.google.com")
        console.log("test1")
    })

    test(`test2 with modul2`, async ({ page }) => {
        await page.goto("http://www.amazon.com")
        console.log("test1")
    })
    
})