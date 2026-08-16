import { StudentManager } from "./StudentManager";
import type { Student } from "./Student";


const manager = new StudentManager();

const nameInput =document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const gradeInput = document.getElementById("grade") as HTMLInputElement;

const addBtn=document.getElementById("addBtn") as HTMLButtonElement;
addBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const age = Number(ageInput.value);
    const course = courseInput.value;
    const grade = Number(gradeInput.value);

  

    const student: Student ={
        id:Date.now(),
        name,
        age,
        course,
        grade,
    };
manager.addStudent(student);
console.log(manager.getStudentById(student.id));
console.log(student);

});


console.log(manager.getStudents());