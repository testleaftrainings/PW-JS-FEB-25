"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var learnAcModifier_1 = require("./learnAcModifier");
var EmployeePayroll = /** @class */ (function (_super) {
    __extends(EmployeePayroll, _super);
    function EmployeePayroll() {
        var _this = _super.call(this) || this; //parent constructor
        _this.accountNumber = 2739045978000;
        _this.name = "Parkavi";
        _this.balance = "5000000";
        return _this;
    }
    EmployeePayroll.prototype.displayAccdetails = function () {
        console.log("Emp acc details" + this.phno);
    };
    return EmployeePayroll;
}(learnAcModifier_1.Employee));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.calculatePer = function () {
        console.log("percentange calculation");
    };
    return HR;
}(EmployeePayroll));
var hrobj = new HR();
hrobj.displayAccdetails();
hrobj.calculatePer();
//HR--->EmployeePayroll-->Employee
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(learnAcModifier_1.Employee));
