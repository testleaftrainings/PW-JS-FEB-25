

let intersection = (arr1,arr2)=>{
    let sameInt=[];
    for (let x = 0; x < arr1.length; x++) {
        for (let y = 0; y < arr2.length; y++) {
           if (arr1[x]===arr2[y]) {
             sameInt.push(arr1[x]);
           }  
        }
    }
    return sameInt;
}

let arr1 = [1,4,6,8,9];
let arr2 = [2,1,3,4,6];
console.log(intersection(arr1,arr2));
