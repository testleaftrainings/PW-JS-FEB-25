import test, { TestInfo } from '@playwright/test'
import fs from 'fs'
let loginData:any[]

test.beforeAll(`Reading data from json`,async()=>{

   loginData=JSON.parse(fs.readFileSync("Data/login.json",'utf-8'))

})

test.use({storageState:"Data/st_login.json"})
test.beforeEach(`PreCondition for Modules`,async({page})=>{
    
 await page.goto("http://leaftaps.com/opentaps/control/login")

await page.click("text=CRM/SFA")
})

test(`Leads Module`,{tag:"@Sanity"},async({page})=>{
    test.info().annotations.push({type:"Test type",description:"Sanity Test" },
                {type:"TestName",description:"TC001_leads Module"}
    )
    await page.getByText("Leads",{exact:true}).click()
    await page.getByText("Create Lead",{exact:true}).click()

})


test(`Accounts Module`,{tag:"@Regression"},async({page})=>{
    test.info().annotations.push({type:"Test type",description:"Regression Test" },
        {type:"TestName",description:"TC002_Accounts Module"}
)
    await page.getByText("Accounts",{exact:true}).click()
    await page.getByText("Create Account",{exact:true}).click()

})

test.afterEach(`Leaftap module Result`,async({page},info:TestInfo)=>{
  
    console.log(info.status)
    console.log(info.title)
    console.log(await page.title())
  

})

test.afterAll(`Leaftap module Report`,async()=>{
        console.log("Report to jira")
        
})