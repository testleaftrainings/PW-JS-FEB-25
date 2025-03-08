
import { test } from "@playwright/test";

test(`Handling the dropdown`, async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter UserName
    await page.getByLabel("Username").fill("demosalesmanager");

    //Enter UserName
    await page.getByLabel("Password").fill("crmsfa");

    //click login
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();

    //Click Lead
    await page.locator("//a[text()='Leads']").click();

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter Comapany Name
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");

     //Enter First Name
     await page.locator("#createLeadForm_firstName").fill("Ravindran");

      //Enter Last Name
    await page.locator("#createLeadForm_lastName").fill("R");

    //Select the dropdown
    //Locate the dropdown by value

    const dropDown= await page.selectOption("#createLeadForm_dataSourceId",{value : "LEAD_DIRECTMAIL"});
   console.log(dropDown);
   
    //Get the values in the dropdown

    const dropDownName = page.locator("#createLeadForm_dataSourceId>option");
    const dropDownCount = await dropDownName.count();
    console.log(`No of dropdowns values present ${dropDownCount}`);

    for (let index = 0; index <dropDownCount; index++) {

       console.log(await dropDownName.nth(index).innerText());
            
    }


})