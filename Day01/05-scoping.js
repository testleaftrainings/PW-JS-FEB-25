
var genderType = "female" // global declaration

function printGender(){ // for action

    let color = "brown";

    if (genderType.startsWith("female")){
     var age = 30;
     let color = "pink" // block scoping    
     console.log("She/her favorite color is "+color);
    }
    else{
        var age =35;
        console.log("He/Him favorite color is "+color);
    }
console.log(age);
}

printGender()
console.log(genderType);
