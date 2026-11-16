import { Employee } from "./demo6-employee.ts"


let authName:string=Employee.getAuthorName();
console.log(authName);

Employee.companyName="EY";

let emp1: Employee = new Employee();
let emp2: Employee = new Employee();
let emp3: Employee = new Employee();


emp1.empId=101;
emp1.empName="Jack";
emp1.empSalary=8000;

emp2.empId=102;
emp2.empName="Saul";
emp2.empSalary=9000;

emp1.displayEmployeeDetail();
emp2.displayEmployeeDetail();
emp3.displayEmployeeDetail();



