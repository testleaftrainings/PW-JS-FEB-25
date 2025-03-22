import test from "@playwright/test";

test(`FileDownload`,async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")

     const filepromise=page.waitForEvent('download')
     page.getByText("Download",{exact:true}).click()
     const fdown=await filepromise;
     await fdown.saveAs("Data/myFile"+new Date().getMilliseconds()+".png")


})