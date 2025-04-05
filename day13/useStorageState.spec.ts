import test from "@playwright/test";

test.use({storageState:"Data/st_login.json"})
    test(`Using login info to homepage`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.click("text=CRM/SFA")
})