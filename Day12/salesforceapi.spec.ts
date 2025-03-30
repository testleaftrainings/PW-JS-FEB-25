import { en, faker } from '@faker-js/faker'
import test, { chromium ,APIRequestContext, expect} from '@playwright/test'

// Endpoint

const endPointUrl="https://login.salesforce.com/services/oauth2/token"
let accessToken:any
let instanceUrl:any
let tokenType:any
 let id:any
const grant_type="password"
const client_id="3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
const client_secret="149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
const username="vidyar@testleaf.com"
const password="Sales@123"

test.describe.serial(`API Testng for servicenow`,async()=>{
test(`Generate Oauth`,async({request})=>{    
 const response=await request.post(endPointUrl,{   
    headers:{
               "Content-Type":"application/x-www-form-urlencoded"
    },
    form:{
        "grant_type":grant_type,
        "client_id":client_id,
        "client_secret":client_secret,
        "username":username,
        "password":password
        }

   })

  const resBody= await response.json()
  console.log(resBody)
  accessToken =resBody.access_token  
  instanceUrl=resBody.instance_url
  tokenType=resBody.token_type
  console.log(`${tokenType} ${accessToken} and ${instanceUrl}`)
//   console.log(`${response.status()}--${response.statusText()}`)
})

//endpoint

test(`Create Lead`,async({request})=>{

  const response= await request.post(`${instanceUrl}/services/data/v63.0/sobjects/Lead`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accessToken}`
    },
    data:{
        "lastname":faker.person.lastName(),
        "company":faker.company.buzzNoun()
    }
  })

  const responseBody=await response.json()
  console.log(responseBody)
  id=responseBody.id
  expect(response.status()).toBe(201)
  expect(response.statusText()).toBe("Created")


  

})



test(`Fetch the Lead`,async({request})=>{
//specific incident  url/sys_id
    const resp=await request.get(`${instanceUrl}/services/data/v63.0/sobjects/Lead/${id}`,{
            headers:{
                "Authorization":`${tokenType} ${accessToken}`,
                "Content-Type":"application/json"
            }, 
    } )
    const respbody=await resp.json()
    console.log(respbody)
    console.log(`${resp.status()}--${resp.statusText()}`)
})
// test(`Update the incident`,async({request})=>{
//     //specific incident  url/sys_id
//         const resp=await request.patch(`${endPointUrl}/${sys_id}`,{
//                             headers:{
//                     "Authorization":auth,
//                     "Content-Type":"application/json"
//                 }, 
//                 data:{
//                     "short_description":faker.lorem.words(4)
//                 },
                
//         } )
//         const respbody=await resp.json()
//         console.log(respbody)
//         console.log(`${resp.status()}--${resp.statusText()}`)
//         expect(respbody.result.sys_class_name).toBe("incident")
//     })

//     test(`Delete the incident`,async({request})=>{
//         //specific incident  url/sys_id
//             const resp=await request.delete(`${endPointUrl}/${sys_id}`,{
                
//                     headers:{
//                         "Authorization":auth,
//                         "Content-Type":"application/json"
//                     }, 
//             } )
//             // const respbody=await resp.json()
//             // console.log(respbody)

//             console.log(`${resp.status()}--${resp.statusText()}`)
//             expect(resp.status()).toBe(204)     
        
//         })






})