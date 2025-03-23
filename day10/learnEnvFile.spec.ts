import test from "@playwright/test";
import dotenv from 'dotenv'
//dotenv.config({path:"Data/prod.env"})

// const filetoRead=process.env.fileName||'qa'
// dotenv.config({path:`Data/${filetoRead}.env`})

test(`Learn to read Env`,async({page})=>{

console.log(process.env.LF_Username)

const uname =process.env.LF_Username as string
const pwd =process.env.LF_Password as string


await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username",uname)
await page.fill("#password",pwd)
await page.click(".decorativeSubmit")

})

//$env:filename='prod' , '' -->to read the data from the default file