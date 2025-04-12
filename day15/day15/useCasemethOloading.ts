import { faker } from "@faker-js/faker";
import { type } from "node:os";

export class Login{
  
    // doLogin(username:string,password:string):void
    // doLogin(email:string,otp:number):void


     readonly user:string  //merely constant variable

   doLogin(credential:string,pwd?:string|number){
        if(typeof pwd=='number'){
             this.doLogin("",123)
        }else{
       
        }

    }

    static getFirstname(){
   return faker.person.firstName()
    }

}
