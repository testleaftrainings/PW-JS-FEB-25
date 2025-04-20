import test, { devices } from "playwright/test";


//test.use({...devices['Galaxy Note 3']})
test(`deviceEmulation`,async({page})=>{

    await page.goto("https://www.google.com")
})
test.use({geolocation:{
    latitude:46.2276,
    longitude:2.2137
},
permissions:['geolocation']
})
test.only(`GeoLocation`,async({page})=>{
    await page.goto("https://www.google.co.in/maps")
    await page.click("#sVuEFc")
    await page.waitForTimeout(3000)
})