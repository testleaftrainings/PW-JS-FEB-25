const browserVersion = "Chrome";  

function getBrowserVersion() {
    let browserVersion = "Firefox";
    if (browserVersion === "Chrome") {
        let browserVersion = "Firefox";  // 'let' is block-scoped
        console.log("Inside function (let): " + browserVersion);  
    }

    console.log("Outside block (let): " + browserVersion); // Refers to global 'browserVersion'
}

getBrowserVersion();  
console.log("Globally: " + browserVersion);
