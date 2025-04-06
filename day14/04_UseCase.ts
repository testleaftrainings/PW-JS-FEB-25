import {chromium, Page} from '@playwright/test'
export class LaunchApp{
  lppage:Page //no refernce/value/session assigned to it 

  constructor(page:Page){
    this.lppage=page
    this.loadUrl()
  }

//  async pageRef(page:Page){
//     this.lppage=page

//  }

  async loadUrl(){
      await this.lppage.goto("http://leaftaps.com/opentaps/control/main")
  }

  async enterCredentials(username:string,password:string){
    await this.lppage.fill("#username",username)
    await this.lppage.fill("#password",password)
  }

  async clickLogin(){
    await this.lppage.click(".decorativeSubmit")
   // await this.lppage.close()
  }
}


// async function doLogin(){
// const browser=await chromium.launch({headless:false})
// const context=await browser.newContext()
// const page=await context.newPage()
// const lfLaunch=new LaunchApp(page)
//  lfLaunch.enterCredentials("demoCSR","crmsfa")
// lfLaunch.clickLogin()
// }

// doLogin()