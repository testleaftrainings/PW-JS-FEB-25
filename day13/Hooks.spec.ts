import test  from '@playwright/test'


test.beforeAll(`Before all the test`,async()=>{
 console.log("Configured for reports")
})

test.beforeEach(`Before Each test`,async()=>{
    console.log("Reading data from external file")
})

test(`Hooks learning`,async({page})=>{
    await page.goto("http://www.google.com")
})


test(`Hooks learning -test 2`,async({page})=>{
    await page.goto("http://www.amazon.com")
})

test.afterEach(`After each test`,async()=>{
    console.log("Collecting test results ")
})

test.afterAll(`After all the test`,async()=>{
    console.log("Attach report to jira")
})