import type { Student } from "./Student";

export class StudentManager{
    private students :Student[] =[];

    addStudent(student:Student):void{
        this.students.push(student);
    }

    getStudents():Student[]{
        return this.students;
    }
    
}