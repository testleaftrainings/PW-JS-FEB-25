API 
Endpoint
Headers-Auth
Body -Payload
Response /validation

APIRequestContext -->BrowserContext 

Browser 
BrowserContext


APIRequest Context -->browsercontext

test(){
  browser=  chromium.launch()
    context=browser.newContext()
    page=context.newPage()
}

test(){
    browser.newContext
    request=context.request -->apirequestContext
    request.httpMethods -->post,get,patch,delete

}

Salesforce app

generate oauth
post
get 
patch 
delete

faker -->generate dynamic -->use the faker when data doesnt have impact on the functionality

country -->price -->yen,dollar
name,phoneno, credit number,
npm install faker-js/@faker
utility 

test({apitesting
data return to use ui testing
})
test({
    fill(locator,responsebody.firstname)
})