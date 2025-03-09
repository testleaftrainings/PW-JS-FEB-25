/* 1. number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
*/
//VariableDeclaration varName:datatype = value;
var firstNAme = "Ravindran";
console.log(firstNAme);
var data = "Ravindran";
data = 201;
data = true;
var value;
value = 25;
value = "Welcome";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function infiniteLoop() {
    while (true) {
        console.log("Looping for forever");
    }
}
infiniteLoop();
