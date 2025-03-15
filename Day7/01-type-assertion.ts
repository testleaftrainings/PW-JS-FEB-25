

let reponse : any = "Record created sucesscully";
let myReponse =<string> reponse;

//Similar to typecasting but this is in compile time.

console.log(myReponse.length);
console.log(typeof myReponse);

//USing as keyword

let sCode : any = "Success";
let statusLength = sCode as string;
console.log(statusLength.length);

