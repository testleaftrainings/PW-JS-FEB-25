
📑 Agenda for Week 2 Day 2 - Playwright Locators 
🎯 [ Focus: Mastering Locators for Precise Automation ]  

📆 Date: 02 February[Sunday]  

🕝 Session Highlights

1️⃣ Recap  
* Key Takeaways from Week2 Day 1

2️⃣CSS Selectors  
* Basic and Advanced CSS Selector Techniques.  
* Hands-on Example: Using ID, Class, and Attribute Selectors.  

3️⃣ XPath Selectors
* Relative vs. Absolute XPath: What's Better?  
* Practical Use Cases with XPath Examples.  

4️⃣ Playwright's getBy Locators
* Explore getByText, getByRole, getByLabel, and more.  
* Accessibility-first Automation with getBy Methods.  
* Real-time Activity: Automating a Login Form.  

5️⃣ Handling Dropdowns 
* Techniques for Handling Native and Custom Dropdowns.  
* Use Case: Selecting Options Dynamically.  

🕡 Wrap Up / Q&A 

📝 Keep your physical notebook and pen handy to sketch out ideas!


DOM -->Document object Model -->HTML Page -->design of the application
   -->ctrl shift i
   -->rightClick -->inspect

tagsname -->information about the element -->type of the element 
<html>  -->root tag 
  <head>  -->header 
   <body> -->element information
   <div> -->division
   <p> -->paragraph
   <input> -->input elelment
   <br> -->break
   <textarea> -->textbox
   <button>-->button element
   <span>-->section
   <h1> --> header names /sub title in the page
   <a>-->href(hypertext reference) -->link text 
   <select> dropdown
   <img> -->image 
   <ul>-->unordered list
   <li>-->list
 </html>



<form id="login" method="post" action="/opentaps/control/login;jsessionid=39888384F7E374F3788533FDFE8458EE.jvm1">
        <p class="top">
          <label for="username">Username</label>
          <input class="inputLogin" type="text" id="username" name="USERNAME" size="50">
        </p>
        <p>
          <label for="password">Password</label>
          <input class="inputLogin" type="password" id="password" name="PASSWORD" size="50">
        </p>

        <p>
          <input class="decorativeSubmit" type="submit" value="Login">
        </p>
      </form>


id -->unique element
class-->group of elements sharing the same style
name
type --> text,combobox,button,radio
size -->size of the element 


element  to be located -->await page.locator("")
action -->type -->fill("value")
       -->click -->click()

Locator strategy
-----------------
CSS selector
Xpath ->xml path
Playwright Locator


CSS -->cascading styling sheet
     --> appealing visual representation of webelement
CSS selector -->to locate the targeted element 
----------------------------------------------
 -->attributes to locate the element 
-->avoid if the attribute value has numbers
id, class,name..


Basic syntax
-----------
 tagname[attributeName=attributeVlaue]
 label[for='Username']

 1. using id  -unique  attribute
 ------------
 syntax 
 1. [id="idValue"]
 2. tagname[id="idvalue"]
 3. #idValue

 Example: 
 #username
 input#username
 input[id="username"]
 [id='username']

 2.using class attribute
 -----------------------
syntax 
 1. [class="classValue"]
 2. tagname[class="value"]
 3..classValue

 input[class='decorativeSubmit']
.decorativeSubmit
input.decorativeSubmit


3.text based
-------------
text=value --> black colour text 
text=CRM/SFA
'text=Username'
 await page.locator(`text=Today's deal`).click()

 4.Partial text based :
 ---------------------
 example string -->attribute Value
3 ways
prefixmatch -->
tagname[attribute^='att']
suffix match
tagname[attribute$='value']
any matches
tagname[attribute*='buteVal']
---------------------------------------------------


Load the url https://login.salesforce.com/
Enter the username as vidyar@testleaf.com
Enter the password as Sales@123
Click on the login button
Get the title of the page

XPath --> xml path  -->find the element throught tags goes across
------------------
absolute xpath
starts with / and root tag

/html/body/div[2]/div[2]/div/form/p[1]/input    

 -->not recommended at all
       
relative xpath:
-------------
syntax:
starts with  // and point the node element(targeted element)

Basic syntax:
------------

//tagname -->locatename

as tagnames are duplicated

use -->
1.Attribute based xpath
--------------------------
//tagname[@attributName='attributeValue]
//input[@id='username']
//input[@name='USERNAME']

2.Index bases xpath:
--------------------
(//tagname[@attributeName='attribute'])[index]
 note: index always starts with 1
 (//input[@class='inputLogin'])[2]  -->password element  from leaftaps appln
 not recommended the  match to the xpath is >5

3.text based xpath:
------------------
syntax:
 //tagname[text()='Black colour text vlaue']

//tagname[text()='USERNAME']
//tagname[text()='          CRM/SFA           ']

4.partial text based xpath
-------------------------
syntax:
------
//tagname[contains(text(),'textVlaue')]

//a[contains(text(),'CRM')]
----------------------------------------
5.partial attribute based
syntax:
//tagname[contains(@attribute,'attributeValue')]
//input[contains(@class,'Login')]

CSS is faster than xpath
Xpath to locate element from top to bottom and bottom to up
css -->top to bottom

enabled
visible
stable
editeable


Exceptions
invalid xpath
Timeout exception -->wrong locator
strict mode violation -->multiple matches







