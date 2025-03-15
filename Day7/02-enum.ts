

enum TestResult {
Pass,
Fail,
Skip
}

function logTestResult(testName: string , result :TestResult) : void {
console.log(`Test : ${testName}`, `Result Code : ${result}`)
}

//enumName.member
logTestResult("Login Page", TestResult.Pass );
logTestResult("SignUp Page", TestResult.Fail );
logTestResult("Profile Page", TestResult.Skip );

//String enum

enum BrowserType {

    Chrome = "chrome",
    Firefox="firefox",
    Edge = "edge",
    Webkit = "safari"
}

function launchBrowser (browserType : BrowserType) {

    console.log(`Launch the browser using ${browserType}`);
    
}

launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);

//Heterogenous enum

enum BrowserStatus {
Open,
Incognito,
Crash="crashed",
Close=3,
any
}

function reportBrowserStatus(status:BrowserStatus):string {

    return `Cureent browser status is ${status}`    
}

console.log(reportBrowserStatus(BrowserStatus.Close));
console.log(reportBrowserStatus(BrowserStatus.any));
