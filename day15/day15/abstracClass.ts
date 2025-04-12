export abstract class WebElements{

    type(locator:string){
        console.log("locate the element and type in it")
    }

    abstract typeAndTab():void
    abstract clearAndtype():void
}

class myAppEle extends WebElements{

    type(locator:string){
        console.log("locate the element and type in it from child class")
    }
    clearAndtype(): void {
        console.log("clear the text fied and type the data")
        }
    typeAndTab(): void {
      console.log("Locate the element and fill the data and do tab")
    }
}
    
//const we=new WebElements()  -not allowed

// const myapp=new myAppEle()
// myapp.type("input")