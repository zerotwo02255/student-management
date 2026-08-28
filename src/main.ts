import { StudentManager } from "./StudentManager";
import type { Student } from "./Student";
import "./style.css";

const manager = new StudentManager();

const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const gradeInput = document.getElementById("grade") as HTMLInputElement;
const studentList = document.getElementById("studentList") as HTMLDivElement;

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
addBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const age = Number(ageInput.value);
  const course = courseInput.value;
  const grade = Number(gradeInput.value);

  if (!name || !course || age <= 0 || grade < 0 || grade > 100) {
    alert("Please enter valid student information");
    return;
  }

  const student: Student = {
    id: Date.now(),
    name,
    age,
    course,
    grade,
  };
  manager.addStudent(student);

  studentList.innerHTML += `
    <div class="student-card">
        <h3>${student.name}</h3>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Grade:</strong> ${student.grade}</p>
    </div>
`;

  console.log(manager.getStudentById(student.id));
  console.log(student);
});

console.log(manager.getStudents());
