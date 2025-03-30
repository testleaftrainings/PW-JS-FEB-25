import { en, faker } from '@faker-js/faker'
import test, { chromium ,APIRequestContext, expect} from '@playwright/test'

// Endpoint
const endPointUrl="https://dev216320.service-now.com/api/now/table/incident"
// Headers-Auth
 const auth=`Basic YWRtaW46VVkybU9VZV43cEBm`
// Body -Payload
// Response /validation
 let sys_id:any

test.describe.serial(`API Testng for servicenow`,async()=>{
test(`Learning with API requestContext`,async()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const apiRequest=context.request

 const response=await apiRequest.post(endPointUrl,{   
    headers:{
        "Authorization":auth,
        "Content-Type":"application/json"
    },
    data:{
        "description":faker.lorem.sentence(4)
    }

   })

   const resBody= await response.json()
 // console.log(resBody)
  sys_id =resBody.result.sys_id  
  console.log(sys_id)
  console.log(`${response.status()}--${response.statusText()}`)
})


test(`Fetch the incident`,async({request})=>{
//specific incident  url/sys_id
    const resp=await request.get(`${endPointUrl}/${sys_id}`,{
        
            headers:{
                "Authorization":auth,
                "Content-Type":"application/json"
            }, 
    } )
    const respbody=await resp.json()
    console.log(respbody)
    console.log(`${resp.status()}--${resp.statusText()}`)
})
test(`Update the incident`,async({request})=>{
    //specific incident  url/sys_id
        const resp=await request.patch(`${endPointUrl}/${sys_id}`,{
                            headers:{
                    "Authorization":auth,
                    "Content-Type":"application/json"
                }, 
                data:{
                    "short_description":faker.lorem.words(4)
                },
                
        } )
        const respbody=await resp.json()
        console.log(respbody)
        console.log(`${resp.status()}--${resp.statusText()}`)
        expect(respbody.result.sys_class_name).toBe("incident")
    })

    test(`Delete the incident`,async({request})=>{
        //specific incident  url/sys_id
            const resp=await request.delete(`${endPointUrl}/${sys_id}`,{
                
                    headers:{
                        "Authorization":auth,
                        "Content-Type":"application/json"
                    }, 
            } )
            // const respbody=await resp.json()
            // console.log(respbody)

            console.log(`${resp.status()}--${resp.statusText()}`)
            expect(resp.status()).toBe(204)     
        
        })






})