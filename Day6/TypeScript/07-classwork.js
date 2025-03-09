/**
* 1. Define the type supportedBrowser = Chrome|Edge
2. Define the browserVersion = 131|130
3. Define the browserProfile using object literal.
4. Define the function and pass the argument (browser:browserProfile)
5. Launch the browser
6. Call the function */
function callBrowser(browser) {
    if (browser.browserName === "Chrome") {
        console.log("Launch the chrome browser");
    }
    else {
        console.log("Launch the edge browser");
    }
}
var chromeBrowser = {
    browserName: "Chrome",
    version: 131
};
var edgeBrowser = {
    browserName: "Edge",
    version: 130
};
callBrowser(chromeBrowser);
