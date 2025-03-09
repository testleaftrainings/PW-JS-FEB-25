

 let username : number | string = 999999888;
 username="ravi@testleaf.com"

 type productDatatype = number | string | boolean;

 let accountNumber : productDatatype = "12414124";
 accountNumber=12121123;
 accountNumber=false

 type supportedBrowsers = "Chrome"|"Firefox";

 function invokeBrowsers(browserName : supportedBrowsers){
if (browserName==="Chrome"){

    console.log("Launch Chrome Browser");    
}else{

    console.log("Launch Chrome Firefox");
}
}
 invokeBrowsers("Chrome");


 //Intersection Type

 type Admin = {
    adminName : string,
    privileges:string[]
 }

 type Employee ={
    name : string,
    empId : number,
    date : string
 }

 type QA = Admin & Employee;

 const userProfile : QA ={
    adminName : "TestLeaf",
    privileges:['server'],
    name : "RAvindran",
    empId : 123455,
    date : "09/03/25"
 }
 console.log(userProfile.adminName);
 console.log(userProfile);
 
 
