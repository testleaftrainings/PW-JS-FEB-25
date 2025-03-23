import test, { expect } from '@playwright/test'

// test.skip(`learn about test annotations`, async ({ page }) => {

//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     console.log(await page.title())

// })


// test(`learn about test annotations with skip`, async ({ page }) => {
//     test.skip(process.env.Browser === 'firefox')
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     console.log(await page.title())
//     await page.fill("#username", "demoCSR")
//     await page.fill("#password", "crmsfa")
//     await page.click(".decorativeSubmit")

// })




// test.fail(`learn about test annotations with fail`, async ({ page }) => {

//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     console.log(await page.title())
//     expect(await page.title()).toContain("Opentaps")
// })



// test.fixme(`learn about test annotations with fixme`, async ({ page }) => {
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     console.log(await page.title())
//     //  expect(await page.title()).toContain("Opentaps")        
// })




test(`learn about test annotations with step`, async ({ page }) => {
    test.slow()
    test.step(`Loading the url and assert the title`,async()=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    console.log(await page.title())
 //   expect(await page.title()).toContain("Leaftaps")
})

test.step(`enterUsername as demoCSR`,async()=>{
    await page.fill("#username","demoCSR")
  
})
})

