import test from "@playwright/test";

test(`Learning to locate element with xpath`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    //using attriute based xpath 
    await page.locator(`//input[@id='username']`).fill("demoSalesManager")
    await page.locator(`(//input[@class='inputLogin'])[2]`).fill("crmsfa")
    await page.locator(`//input[@class='decorativeSubmit']`).click()

    //using text based 
    //await page.locator(`//a[text()='CRM/SFA']`).click() can be located -->becoz not having exact text to match
    await page.locator(`//a[contains(text(),'CRM')]`).click()    
})



test.only(`Learning to locate element with multiple matches`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    //using attriute based xpath 
    //resulable locator
    const credentials= page.locator(`//input[@class='inputLogin']`)
    // await credentials.first().fill('demosalesManager')
    // await credentials.last().fill('crmsfa')
    await credentials.nth(0).fill('demosalesManager')
    await credentials.nth(1).fill('crmsfa')
    await page.locator(`//input[@class='decorativeSubmit']`).click()
    //using text based 
    //await page.locator(`//a[text()='CRM/SFA']`).click() can be located -->becoz not having exact text to match
    await page.locator(`//a[contains(text(),'CRM')]`).click()    
})
