export class Employee{
    public empName:string
    protected phno:number
    private salary:number

    constructor(){
        this.empName="Soundarya"
        this.phno=8977837654
        this.salary=400000
    }

    public get readSalary(){
        return this.salary
    }

  public set modifyAccess(salary:number){
   this.salary=salary
  }

displayDetails(){
        console.log(`The emp details are ${this.empName},${this.phno},${this.salary}`)
    }    


}

const emp=new Employee()
emp.displayDetails()
console.log(emp.readSalary)//property
emp.modifyAccess=700000 //property
console.log(emp.readSalary)
