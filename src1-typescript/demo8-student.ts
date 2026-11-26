export class Student {

    private studentID: number;
    private studentName: string;
    private studentPercentage: number;
    public static schoolName: string;
    public static schoolLocation: string;

    constructor(studentId: number, studentName: string, studentPercentage: number) {
        if (studentId > 100) {
            this.studentID = studentId;
        }
        else
        {
            this.studentID=0;
        }

        this.studentName = studentName;
        this.studentPercentage = studentPercentage;
    }

    public displayStudentDetails(): void {
        console.log(this.studentID)
        console.log(this.studentName)
        console.log(this.studentPercentage)
        console.log(Student.schoolName)
        console.log(Student.schoolLocation)
        console.log("------------")
    }

}