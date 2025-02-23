/* '',"",``. */ 


/* 
String Declaration 
1. String literal
2. String object
*/

/* let firstName ="Ravi"
let userName = "Ravi"

console.log(firstName===userName);

let firstName1 = new String("Ravi")
let userName1 = new String("Ravi")

console.log(firstName1===userName1);

//Escape Sequence

let testType='It\'s is a regression testing'
let testType1="It is a \"regression\" testing"
console.log(testType);
console.log(testType1);

//Concatenation -->concat()
let testcaseName = "Create a lead"
let testCaseId = 231;

let result =testCaseId +" - "+testcaseName+" - "+ ":passed test cases"
console.log(result);


//Template literal = introduced in ES6

let testcases = 200;
let output =`There are ${testcases} testcases`
console.log(output);
 */
//String Methods
//How to get count of string. - .length
let courseName= "Playwright"
console.log(`The length of the string is ${courseName.length}`);

//charAt()

console.log(`The first charater in the string is ${courseName.charAt(0)}`);

//indexOf()

console.log(`The index of a is ${courseName.indexOf('a')}`);

//includes() -- true/ false

console.log(`${courseName.includes('Play')}`);

//slice()

let course = courseName.slice(-5,-1)
console.log(course);

//2-->start index and 4 --> endindex-1


//split()
let courseSplit = courseName.split("");
console.log(courseSplit);

//substring()
let coursesubString = courseName.substring(4,3)
console.log(coursesubString);



//reverse()


