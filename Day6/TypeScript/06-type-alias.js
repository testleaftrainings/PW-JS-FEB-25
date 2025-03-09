var username = 999999888;
username = "ravi@testleaf.com";
var accountNumber = "12414124";
accountNumber = 12121123;
accountNumber = false;
function invokeBrowsers(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome Browser");
    }
    else {
        console.log("Launch Chrome Firefox");
    }
}
invokeBrowsers("Chrome");
var userProfile = {
    adminName: "TestLeaf",
    privileges: ['server'],
    name: "RAvindran",
    empId: 123455,
    date: "09/03/25"
};
console.log(userProfile.adminName);
console.log(userProfile);
