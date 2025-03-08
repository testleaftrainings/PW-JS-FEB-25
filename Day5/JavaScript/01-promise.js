
let batonDelivery = new Promise ((resolve, reject)=>{

    let isBatonDelivered= true;

if (isBatonDelivered){
    resolve("Baton successfully passed Keep running");
}else {
reject("The baton was dropped. Race over")
}
})

batonDelivery
.then(message =>{
    console.log(message);    
})

.catch(error=>{
console.log(error);
})