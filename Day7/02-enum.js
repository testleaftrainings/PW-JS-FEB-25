var TestResult;
(function (TestResult) {
    TestResult[TestResult["Pass"] = 0] = "Pass";
    TestResult[TestResult["Fail"] = 1] = "Fail";
    TestResult[TestResult["Skip"] = 2] = "Skip";
})(TestResult || (TestResult = {}));
function logTestResult(testName, result) {
    console.log("Test : ".concat(testName), "Result Code : ".concat(result));
}
//enumName.member
logTestResult("Login Page", TestResult.Pass);
logTestResult("SignUp Page", TestResult.Fail);
logTestResult("Profile Page", TestResult.Skip);
//String enum
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Edge"] = "edge";
    BrowserType["Webkit"] = "safari";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launch the browser using ".concat(browserType));
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
launchBrowser(BrowserType.Firefox);
//Heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 0] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["Close"] = 3] = "Close";
    BrowserStatus[BrowserStatus["any"] = 4] = "any";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    return "Cureent browser status is ".concat(status);
}
console.log(reportBrowserStatus(BrowserStatus.Close));
console.log(reportBrowserStatus(BrowserStatus.any));
