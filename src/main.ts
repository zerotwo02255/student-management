import "./style.css";
import { StudentManager } from "./StudentManager";
import type { Student } from "./Student";

const manager = new StudentManager();

// Keep track of the student we are editing
let editingStudentId: number | null = null;

// Get HTML elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const gradeInput = document.getElementById("grade") as HTMLInputElement;

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const studentList = document.getElementById("studentList") as HTMLDivElement;


// ====================
// ADD / UPDATE STUDENT
// ====================

addBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const course = courseInput.value.trim();
    const grade = Number(gradeInput.value);

    // Validation
    if (!name || !course || age <= 0 || grade < 0 || grade > 100) {
        alert("Please enter valid student information");
        return;
    }

    // ====================
    // UPDATE EXISTING STUDENT
    // ====================

    if (editingStudentId !== null) {

        const updatedStudent: Student = {
            id: editingStudentId,
            name,
            age,
            course,
            grade
        };

        manager.updateStudent(updatedStudent);

        // Reset editing mode
        editingStudentId = null;
        addBtn.textContent = "Add Student";

        // Refresh the student list
        displayStudents();

    } else {

        // ====================
        // ADD NEW STUDENT
        // ====================

        const student: Student = {
            id: Date.now(),
            name,
            age,
            course,
            grade
        };

        manager.addStudent(student);

        // Refresh the student list
        displayStudents();
    }

    // Clear inputs
    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";
    gradeInput.value = "";

});


// ====================
// DISPLAY STUDENTS
// ====================

function displayStudents(): void {

    studentList.innerHTML = "";

    manager.getStudents().forEach((student) => {

        studentList.innerHTML += `
            <div class="student-card">

                <h3>${student.name}</h3>

                <p>
                    <strong>Age:</strong> ${student.age}
                </p>

                <p>
                    <strong>Course:</strong> ${student.course}
                </p>

                <p>
                    <strong>Grade:</strong> ${student.grade}
                </p>

                <button 
                    class="edit-btn" 
                    data-id="${student.id}"
                >
                    Edit
                </button>

                <button 
                    class="delete-btn" 
                    data-id="${student.id}"
                >
                    Delete
                </button>

            </div>
        `;
    });
}


// ====================
// EDIT + DELETE
// ====================

studentList.addEventListener("click", (event) => {

    const target = event.target as HTMLElement;

    const id = Number(target.getAttribute("data-id"));


    // ====================
    // EDIT
    // ====================

    if (target.classList.contains("edit-btn")) {

        const student = manager.getStudentById(id);

        if (student) {

            editingStudentId = student.id;

            nameInput.value = student.name;
            ageInput.value = String(student.age);
            courseInput.value = student.course;
            gradeInput.value = String(student.grade);

            addBtn.textContent = "Update Student";
        }
    }


    // ====================
    // DELETE
    // ====================

    if (target.classList.contains("delete-btn")) {

        manager.deleteStudent(id);

        displayStudents();
    }

});