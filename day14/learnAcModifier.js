"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empName = "Soundarya";
        this.phno = 8977837654;
        this.salary = 400000;
    }
    Object.defineProperty(Employee.prototype, "readSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "modifyAccess", {
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.displayDetails = function () {
        console.log("The emp details are ".concat(this.empName, ",").concat(this.phno, ",").concat(this.salary));
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee();
emp.displayDetails();
console.log(emp.readSalary); //property
emp.modifyAccess = 700000; //property
console.log(emp.readSalary);
