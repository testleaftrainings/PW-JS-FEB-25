class Login{
    browserName:string="Chrome"
    username:string
    password:string
    

//refer the current class property /method -->this
    enterLoginCredentials(user:string,pwd:string):string{    //local parameter/variable  
        console.log(`The browser ${this.browserName} to launch the application with ${user} and ${pwd}`)
       // this.clickLogin()
       return "Login is success"
    }

    clickLogin():void{
        console.log("using .decorativeSubmit locator clik login button" )
    }
}

const doLogin=new Login()
doLogin.enterLoginCredentials("Nirmal","nirmal@345")
doLogin.clickLogin()


// class Employee{
//     empName:string
//     empId:number

//     constructor (){ //default constructor
//           console.log("intialize the browser")
//           this.empDetails()
//     }
//     empDetails(){
//         console.log("Using default constructor")
//     }
// }

// const emp=new Employee()