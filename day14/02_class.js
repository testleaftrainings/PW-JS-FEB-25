var Login = /** @class */ (function () {
    function Login() {
        this.browserName = "Chrome";
    }
    //refer the current class property /method -->this
    Login.prototype.enterLoginCredentials = function (user, pwd) {
        console.log("The browser ".concat(this.browserName, " to launch the application with ").concat(user, " and ").concat(pwd));
        // this.clickLogin()
        return "Login is success";
    };
    Login.prototype.clickLogin = function () {
        console.log("using .decorativeSubmit locator clik login button");
    };
    return Login;
}());
// const doLogin=new Login()
// doLogin.enterLoginCredentials("Nirmal","nirmal@345")
// doLogin.clickLogin()
var Employee = /** @class */ (function () {
    function Employee() {
        console.log("intialize the browser");
        this.empDetails();
    }
    Employee.prototype.empDetails = function () {
        console.log("Using default constructor");
    };
    return Employee;
}());
var emp = new Employee();
