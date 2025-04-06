class LoginFunctionality{
  user:string
  passWord:string

  constructor(user:string,pwd:string){ //parametrized Constructor
    this.user=user
    this.passWord=pwd
    this.loadUrl()
  }

   loadUrl(){
    console.log("Launch the Leaftaps application")
   }
   enterCredentials(){
    console.log(`Enter valid Credentisals as ${this.user}:${this.passWord}`)
   }

   clickLogin(){
     console.log("Click on Login button")
   }

}

const login=new LoginFunctionality("Soundarya","23@soundarya")
login.enterCredentials()