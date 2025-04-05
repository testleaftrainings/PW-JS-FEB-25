import test, { chromium, firefox } from "@playwright/test";

test(`Learning persitent context`,async()=>{
    const context =await chromium.launchPersistentContext('./userdatadir',{headless:false,
        httpCredentials:{
            username:"admin",
            password:"testleaf"
        }
    }    
    )
    const page=await context.newPage()
    const allPages=context.pages()
    console.log(allPages.length)
    await allPages[0].goto("https://leafground.com/auth.xhtml")
    // await allPages[0].fill("#username","demoCSR")
    // await allPages[0].fill("#password","crmsfa")
    // await allPages[0].click(".decorativeSubmit")
    await allPages[0].click("//span[text()='Basic Auth']")
    await allPages[0].waitForTimeout(4000)
    await context.close();

  const newContext = await chromium.launchPersistentContext('./userdatadir', {
    headless: false
    // No httpCredentials
  });

  const newPage = await newContext.newPage();
  await newPage.goto('https://leafground.com/auth.xhtml'); // This should trigger login popup or 401
  await newPage.click("//span[text()='Basic Auth']")
  await newPage.waitForTimeout(4000)
})