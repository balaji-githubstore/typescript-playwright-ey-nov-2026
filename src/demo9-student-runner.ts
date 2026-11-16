import { Student } from "./demo8-student.ts";

Student.schoolName="Global";
Student.schoolLocation="Chennai";

let stu1:Student=new Student(101,"Jack",98);
let stu2:Student=new Student(102,"Saul",88.2);

stu1.displayStudentDetails();