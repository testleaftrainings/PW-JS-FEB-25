export class EleAction{

  // public click(locator:string,):void

// public click(locator:string,forceClick:boolean):void
  
  public click(locator:string,forceClick?:boolean){
    if(!forceClick){
        console.log("Click the element normally" +locator)
    }else{
        console.log("Element Clicked forcibly"+forceClick)
    }
  }

    public typeandEnter(){
          console.log("type and enter the data")
    }

}

// const ele=new EleAction()
// ele.click("text=CRM/SFA")
// ele.click("text=CRM/SFA",true)

