import test from '@playwright/test'
import { WelcomePage } from './crmPage'

test(`Launch app using class and object`,async({page})=>{
   // const lp=new LaunchApp(page)  
    const wp=new WelcomePage(page)
    await wp.enterCredentials("demoCSR","crmsfa")
    await wp.clickLogin()
    await wp.clickCRMSFA()

    //const wp=new WelcomePage(page)
   
     

})