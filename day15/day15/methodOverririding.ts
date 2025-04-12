import { Browser } from "./learninterface";
import { EleAction } from "./methodOverloading";

class pageAction extends EleAction implements Browser{
    goto(url: string): void {
       console.log("")
    }
    verifyTitle(): string {
     return "title"
    }
    timeOut(): number {
        return 4000
    }

    launchUrl(){
        console.log("Load the url")
    }

    public typeandEnter() {
        super.typeandEnter()
        console.log("Type and enter with delay")
    }

}
const page=new pageAction()
page.typeandEnter()
page.click("locator=button",true)
