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
let firstNAme : string = "Ravindran";
console.log(firstNAme);

let data : any = "Ravindran";
data=201;
data = true;

let value:unknown;
value = 25;
value="Welcome";

if (typeof value === "string"){

    console.log(value.toUpperCase());
    
}

function infiniteLoop(){

    while (true){
        console.log("Looping for forever");
        
    }

}

infiniteLoop()

