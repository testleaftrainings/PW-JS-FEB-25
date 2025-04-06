class Browser {
    browserName:string="chrome"  //data  //class property 
    browserVersion:number=120.3
    isActive:boolean=true

    printBrowserdetails(){  //action
        console.log("Display the browser details")
    }
}

//create an object /instance/reference for the class
const browserDetails=new Browser()  
const bVersion=browserDetails.browserVersion
console.log(bVersion)
console.log(browserDetails.browserName)
browserDetails.printBrowserdetails()