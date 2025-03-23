import test from "@playwright/test";
import fs from 'fs'
//import credentials from '../../Data/login.json'
//day10/tests/data/login.json

// for(let data of credentials){
// test(`Learn to read data from import ${data.TCaseId}`,async({page})=>{
//     console.log(data.Username)
//     console.log(data.Password)
// })

// }


const logincredentials=JSON.parse(fs.readFileSync("Data/login.json",'utf-8'))

logincredentials.forEach(element => {
    console.log(element.TCaseId)
});



test(`test dats from json`,async()=>{
    console.log(logincredentials[0].Username)
})
