/* 

// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}
userProfile("Ravi"); // Example call

// Task 2: Arrow Function
const double = (num) => num * 2;
console.log(double(5)); // Example call, should return 10

// Task 3: Anonymous Function with setTimeout
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);
 */

setTimeout(() => {
    console.log("This message is delayed by 2 seconds");

}, 3000);



// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => {
        callback();
    }, 3000);}

function user1(){
    console.log(`User Name: Ravi, EmpNo.: 1234`);
}
// Calling getUserData and using a callback function
getUserData(user1)



/* 
Explanation:
Function Declaration: The userProfile function is defined using the standard function declaration syntax and logs a greeting message.
Arrow Function: The double function uses an arrow function syntax to return twice the input number.
Anonymous Function: setTimeout executes an anonymous function after 2 seconds.
Callback Function: getUserData simulates an asynchronous operation (e.g., fetching data) using setTimeout, then calls the provided callback with a user object. */