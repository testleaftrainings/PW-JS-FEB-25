import test from '@playwright/test'
import { request } from 'http'

test(`Monitor the api`,async({page})=>{
  await page.goto("https://login.salesforce.com")

  page.on('request',request=>{
    console.log(`<<<--Request-->`,request.url(),request.postData())
  })
  
  page.on('response',response=>{
    console.log(`<<<--Request-->`,response.request().url(),response.status())
  })

  await page.fill("#username","vidyar@testleaf.com")
  await page.fill("#password","Sales@123")
  await page.click("#Login")
  await page.click(".slds-icon-waffle")

})
//aura?preloadActions



test(`Abort the api from loading`,async({page})=>{
    await page.route("**/*.{svg,png,jpg}",route=>route.abort())
    await page.goto("https://www.testleaf.com")
    // await page.goto("https://login.salesforce.com")    
    // await page.fill("#username","vidyar@testleaf.com")
    // await page.fill("#password","Sales@123")
    // await page.click("#Login")
    // await page.click(".slds-icon-waffle")
    })

test(`Modify the request`,async({page})=>{

    await page.goto("https://login.salesforce.com")    

    await page.route(`**/aura?preloadActions`,async(route,request)=>{
        console.log(await request.allHeaders())
        console.log(request.postData())
        delete Headers['date']
        await route.continue({
            headers:{
                   "content-length":""
               },
                postData:{
                    "aura.token":""
                }            
            
        })
    })
    
    
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.click(".slds-icon-waffle")

})


test.only(`Modify the response`,async({page})=>{

    await page.goto("https://login.salesforce.com")    

    await page.route(`**/aura?preloadActions`,async(route,request)=>{
        console.log(await request.allHeaders())
        console.log(request.response())
        await route.fulfill({
            status:200,
            headers:{
                   "content-length":"",
                   "date": ""
               },                
        })

        page.on('response',response=>{
            const headers= response.allHeaders()
            response.status()            
            console.log(`<<<--Request-->`,response.request().url(),response.status(),headers)
            
          })

    })

    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    const newPromise=await Promise.all([
        page.waitForResponse(''),
        page.click("#Login")
    ])
    
    await page.click(".slds-icon-waffle")

  
})
