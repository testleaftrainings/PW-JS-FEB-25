import test, { Page } from '@playwright/test'
test(`Launching diff context with tabs`, async ({ page }) => {

    //const context = await browser.newContext() 
    //  const page = await context.newPage()
    await page.waitForTimeout(3000)
    await page.goto("http://www.amazon.in")
    // const page1 = await context.newPage()
    // await page1.goto("http://www.flipkart.com")

    //  const context2 = await browser.newContext()
    //const page3 = await context2.newPage()
    //  await page3.goto("http://www.snapdeal.com")
})

test(`Handling tabs`, async ({ context, page }) => {

    await page.goto("http://www.amazon.in")
    const searchBox = page.locator("#twotabsearchtextbox")
    await searchBox.fill("Phones")
    await searchBox.press('Enter') //keyboard press

    //create a promise to handle the even tusing event listener
    //click()  event triggered
    //resolve it -->get the page reference for the new page

    const newPage = context.waitForEvent('page')
    page.locator("(//span[contains(text(),'OnePlus Nord')])[1]").click()
    const childPage = await newPage;
    // await childPage.waitForLoadState('load')
    console.log(await childPage.title()) //childpage
    const prices = await childPage.locator(".a-price-whole").allInnerTexts()
    console.log(prices)

    await page.bringToFront()
    await page.locator("//span[text()='Get It Today']/preceding::i[@class='a-icon a-icon-checkbox']").click()
    console.log(await page.title())// parent page
    await page.close()

    await childPage.waitForTimeout(3000)

})


test(`Handling multiple windows`,async({context,page})=>{

        await page.goto("https://leafground.com/window.xhtml")


//concurrent pages

//      const [firstPage,secndPage] =await Promise.all([
//             context.waitForEvent('page'),
//             context.waitForEvent('page'),
//           page.getByText("Open Multiple",{exact:true}).click()
//       ])

//      // []==[promse1,prome2,promise3]

// await firstPage.title()


const [multiplePages]=await Promise.all([    
 context.waitForEvent('page'),
 page.getByText("Open Multiple",{exact:true}).click()
])
       
const allPages=multiplePages.context().pages()
console.log(allPages.length)
await allPages[0].title()


for(let page of allPages){
    console.log(page.url())
    console.log(await page.title())
}

let webPage:any
for(let i=0;i<allPages.length;i++){
   const title=await allPages[i].title()
   console.log(`The title of the pages is ${title}`)
   await allPages[i].waitForTimeout(2000)
    if(title==="Dashboard"){
        webPage=allPages[i]
    }

}

await webPage.locator(`#email`).fill("vid@gmail.com")
await webPage.waitForTimeout(3000)
})


test.only(`concurrent Pages`,async({context,page})=>{
    await page.goto("https://leafground.com/window.xhtml");
    const newPages: Page[] = [];    
    context.on('page', cpage => {
          newPages.push(cpage);
    });
    // Click to open multiple pages
    await page.getByText("Open Multiple", { exact: true }).click();
    console.log(newPages.length)

})