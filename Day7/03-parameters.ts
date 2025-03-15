/* 
// Optional Parameter

function userRegisteration (fName : string, lName: string, gender : string, height?:number, age?:number){

console.log(`SignUp with ${fName}, ${lName}, ${gender}, ${height}`);}


userRegisteration("Ravindran","R","male") */


//Default Parameter

function profile (username : string, isValid : boolean, profileStatus : string = 'Available', dob?: string ){
    console.log(`Profile status : ${username}, ${isValid}, ${profileStatus}, ${dob}`);
}

profile("ravi", true,"Busy")