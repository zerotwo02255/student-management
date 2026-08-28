import type { Student } from "./Student";

export class StudentManager {

    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    getStudentById(id: number): Student | undefined {
        return this.students.find(
            student => student.id === id
        );
    }

    deleteStudent(id: number): void {
        this.students = this.students.filter(
            student => student.id !== id
        );
    }

    updateStudent(updatedStudent: Student): void {

        const index = this.students.findIndex(
            student => student.id === updatedStudent.id
        );

        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
    }
}