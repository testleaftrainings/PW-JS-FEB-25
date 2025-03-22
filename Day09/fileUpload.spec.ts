import test from "@playwright/test";
import path from "path";

test(`FileUpload`,async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload")

await page.locator("#file-upload").setInputFiles("Day09/learningFileUpload.txt")
await page.waitForTimeout(6000)


//filechooser event handler 
const filePromise=page.waitForEvent('filechooser')
page.locator("#drag-drop-upload").click()
const fileUpload=await filePromise;
await fileUpload.setFiles("Data/TL.png")
})

test.skip(`Multiple FileUpload`,async({page})=>{

    await page.goto("https://leafground.com/file.xhtml")
        await page.locator("//span[text()='Choose']/following-sibling::input").last().setInputFiles(["Data/PushYourself.jpg","Data/TL.png"])
    await page.waitForTimeout(6000)
    
    
    })