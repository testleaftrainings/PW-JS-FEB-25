/*
// Optional Parameter

function userRegisteration (fName : string, lName: string, gender : string, height?:number, age?:number){

console.log(`SignUp with ${fName}, ${lName}, ${gender}, ${height}`);}


userRegisteration("Ravindran","R","male") */
//Default Parameter
function profile(username, isValid, profileStatus, dob) {
    if (profileStatus === void 0) { profileStatus = 'Available'; }
    console.log("Profile status : ".concat(username, ", ").concat(isValid, ", ").concat(profileStatus, ", ").concat(dob));
}
profile("ravi", true, "Busy");
