import { test } from "./cmyfixture"

test(`Learning fixture`,async({lpPage,hp})=>{
    await lpPage.title()  
    await hp.locator("//a[text()='Leads']").click()
})