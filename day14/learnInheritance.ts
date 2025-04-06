import { Employee } from "./learnAcModifier"

class EmployeePayroll extends Employee{

  accountNumber:number
  name:string
  balance:string

  constructor(){
   super()  //parent constructor
  this.accountNumber=2739045978000
  this.name="Parkavi"
  this.balance="5000000"
  }

    displayAccdetails(){
        console.log("Emp acc details"+ this.phno)
    }

}


class HR extends EmployeePayroll{

    calculatePer(){
        console.log("percentange calculation")
    }

}


const hrobj=new HR()
hrobj.displayAccdetails()
hrobj.calculatePer()

//HR--->EmployeePayroll-->Employee

class Admin extends Employee{
    //Hirerchial inheritance
}