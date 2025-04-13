import {Page} from '@playwright/test'

declare module '@playwright/test'{
    interface Page{
        cickAnddelay:(locator:string)=>Promise<void>
        delayedType:(locator:string,data:string)=>Promise<void>
    }
}