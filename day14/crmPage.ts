import { Page } from "@playwright/test"
import { LaunchApp } from "./loginPage"

export class WelcomePage extends LaunchApp{


 constructor(wpage:Page){
      super(wpage)
   // this.init()
   
 }
   async  clickCRMSFA(){
        await this.lppage.click("text=CRM/SFA")
    }

    async init(){
        await this.lppage.goto("homepageUrl")
    }


}