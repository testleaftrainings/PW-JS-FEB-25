/* 

// push() - add one or more elements to the end of the array

let browserActions = ['Login', 'signup', 'userprofile'];
browserActions.push('Check notifications');
console.log(browserActions);


//pop() - remove the last element from an array and return it

browserActions.pop();
console.log(browserActions);

//shift() - remove the first element from the array.

browserActions.shift();
console.log(browserActions);



// unshift() - add one or more elements to the beginning of the array

browserActions.unshift('navigate','click','press');
console.log(browserActions); */

// slice() - extracts a section of an array without modifying the original

/* let cart = ['mouse', 'keyboard','bluetooth', 'camera','airpods', 'phone','speakers'];
/* let result = cart.slice(1,5);
console.log(result); */


//splice() - add or remove elements in an array.
/* cart.splice(1,2,"smartwatch","pendrive")
console.log(cart) */;

// spread syntax [...array]

/* let numbers = [1,2,3,4];
let copiedNumbers = [...numbers];

console.log(copiedNumbers) */

//merge using spread syntax
/* 
let array1 = [1,2,10];
let array2 = [10,5,6];

let mergedArray = [...array1,...array2];
console.log(mergedArray);

let concatArray = array1.concat(array2);
console.log(concatArray);

let newNUmbers = [0,...numbers,12]
console.log(newNUmbers); */ 

// sorting of array

let numberArray = [6,2,7,4,5,10,14,25];
numberArray.sort();
console.log(numberArray);

//Numbers - comapre function
numberArray.sort((a,b)=>a-b);
console.log(numberArray);

numberArray.sort((a,b)=>b-a);
console.log(numberArray);

//foreach loop
numberArray.forEach((num)=>{
    console.log(num);
    })

    //map
let  newNumberArray = [1,2,3,4,5]
let squared = newNumberArray.map((num)=>num*num);
console.log(squared);

    //filter
    let even = newNumberArray.filter((num)=>num%2===0);
    console.log(even);
    
    //join
    console.log(newNumberArray.join('-'));
    

    //heterogenous array

    let heterogenousArray = [2,3,"chrome",true,undefined,["Playwright",1,true]];
    console.log(heterogenousArray);
    

    let number = 23
    number="twenty three"