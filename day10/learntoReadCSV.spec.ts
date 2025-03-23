import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'

const loginData=parse(fs.readFileSync("Data/loginCredentials.csv"),{
    columns:true, //to set the first row of the csv file as header information
    skip_empty_lines:true
})

//loginData is stored with array of data from csv [row1][row2]

    
for(let data of loginData){   
test(`Learn to read CSV data ${data.TCID}`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("//input[@id='username']",data.Username)
    await page.fill("#password",data.password)
    await page.waitForTimeout(3000)
    //locator().fill()
    await page.locator(".decorativeSubmit").click()
})
}


for(let data of loginData){   
    test(`Learn to read data ${data.TCID}`,async({page})=>{
    
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("//input[@id='username']",data.Username)
        await page.fill("#password",data.password)
        await page.waitForTimeout(3000)
        //locator().fill()
        await page.locator(".decorativeSubmit").click()

        await page.locator(`text=CRM/SFA`).click()
        await page.getByRole('link',{name:'Leads',exact:true}).click()
        await page.getByRole('link',{name:'Create Lead',exact:true}).click()

// const allCLfields= await page.locator("//span[text()='Company Name']/following::input").all()
// for(let i=0;i<allCLfields.length;i++){
//     if(i==1||i==3||i==5){
//     allCLfields[i].fill(logindata[1].Username)
// }else{

// // }
// }
//       // allCLfields[0]=(//span[text()='Company Name']/following::input)[1]
    })
    }
   