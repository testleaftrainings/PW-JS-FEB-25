import test from '@playwright/test'
import { createResource, getResource } from './apiUtility'
import { faker } from '@faker-js/faker'

let lname=faker.person.lastName()
let cname=faker.company.buzzNoun()
let id:any
let searchName:any

test.describe.serial(`E2E`,async()=>{
test(`Salesfore e2e`,async({request})=>{
    id=await createResource(request,lname,cname)
    searchName=await getResource(request)
    console.log(searchName)

})

// test(`Edit Lead`,async({page})=>{
// //validate with UI
//  //launch url, credentials, applauncher,Lead, Search


// await page.goto("https://login.salesforce.com/");


// await page.locator("#username").fill("vidyar@testleaf.com");


// await page.locator("#password").fill("Sales@123");


// await page.locator("#Login").click();


// await page.waitForTimeout(6000);


// await page.locator(`//button[@title="App Launcher"]`).click();


// await page.locator(`//button[text()="View All"]`).click();


// await page.waitForTimeout(6000);


// await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('Leads');


// await page.locator(`//mark[text()='Leads']`).click();


// await page.locator(`//input[@placeholder="Search this list..."]`).fill(searchName);


// // await page.waitForTimeout(6000);


// // await page.locator(`//button[@name="refreshButton"]`).click();


// // await page.waitForLoadState("domcontentloaded");


// // await page.locator(`//span[text()='Show Actions']`).first().click();


// // await page.locator(`//div[@title="Edit"]`).first().click();



// // await page.locator(`//a[@role='combobox']`).first().click();


// // await page.locator(`//a[@title='Mrs.']`).click();


// // await page.locator(`//input[@placeholder="First Name"]`).fill("Ramesh");


// // await page.locator(`//span[text()='Save']`).last().click();

// })

 })

