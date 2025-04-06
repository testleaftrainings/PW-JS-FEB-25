var LoginFunctionality = /** @class */ (function () {
    function LoginFunctionality(user, pwd) {
        this.user = user;
        this.passWord = pwd;
        this.loadUrl();
    }
    LoginFunctionality.prototype.loadUrl = function () {
        console.log("Launch the Leaftaps application");
    };
    LoginFunctionality.prototype.enterCredentials = function () {
        console.log("Enter valid Credentisals as ".concat(this.user, ":").concat(this.passWord));
    };
    LoginFunctionality.prototype.clickLogin = function () {
        console.log("Click on Login button");
    };
    return LoginFunctionality;
}());
var login = new LoginFunctionality("Soundarya", "23@soundarya");
login.enterCredentials();
