import { WebElements } from "./abstracClass"

export interface Browser{

  /**this method is to navigate to the loaded url 
   * @author vidya
   * @param url     
   */
  goto(url:string):void

  click(locator:string):void

  verifyTitle():string

  timeOut():number
}


export interface Page extends Browser{

     pageSource():string
}

export interface Verification{
    verifInnerText():boolean
}

class BrowserImplementation extends WebElements implements Page,Verification{
    typeAndTab(): void {
      console.log("type and then do tab")
    }
    clearAndtype(): void {
       console.log("clear the field and type it ")
    }
    verifInnerText(): boolean {
       return true
    }
    pageSource(): string {
        throw new Error("Method not implemented.")
    }
    timeOut(): number {
     console.log(`delay the click`)
     return 3000
    }
    goto(url: string): void {
       console.log(`Loaded url is ${url}`)
    }
    click(locator: string): void {
     console.log(`Element is Clicked using ${locator}`)
    }
    verifyTitle(): string {
       console.log("title")
       return "title of the page"
    }

}


export class LoginPage extends BrowserImplementation{

    // goto(url:string){ //overriding

    // }

}

const page=new BrowserImplementation()
page.goto("http:google.com")

const login=new LoginPage()
login.goto("")

//const pg=new Verification() -not allowed