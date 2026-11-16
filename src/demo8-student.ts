export class Student{
 
    public studentID:number;
    public studentName:string;
    public studentPercentage:number;
    public static schoolName:string;
    public static schoolLocation:string;

    constructor(studentId:number,studentName:string,studentPercentage:number)
    {
        this.studentID=studentId;
        this.studentName=studentName;
        this.studentPercentage=studentPercentage;
    }

    public displayStudentDetails():void{
        console.log(this.studentID)
        console.log(this.studentName)
        console.log(this.studentPercentage)
        console.log(Student.schoolName)
        console.log(Student.schoolLocation)
        console.log("------------")
    }
 
}