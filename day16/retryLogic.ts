import {test as baseTest} from '@playwright/test'
export const test=baseTest.extend({
    page: async({page},use,testInfo)=>{        
        page.cickAnddelay= async(locator:string)=>{
          await page.click(locator)
        }
        if(testInfo.retry){
            await page.waitForTimeout(4000)
        }        
      page.delayedType=async(locator:string,value:string)=>{
         if(testInfo.retry){
            await page.waitForTimeout(3000)
            await page.fill(locator,value)
         }
     }
      await use(page)
    }

})