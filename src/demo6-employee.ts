export class Employee
{
    public empId?:number;
    public empName?:string;
    public empSalary?:number;
    public static companyName?:string;

    
    public displayEmployeeDetail():void
    {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSalary);
        console.log(Employee.companyName);
        console.log("--------------------");
    }

    public static getAuthorName():string
    {
        return "Balaji Dinakaran";
    }

}

