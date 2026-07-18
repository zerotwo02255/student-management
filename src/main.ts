import { StudentManager } from "./StudentManager";

const manager = new StudentManager();

const nameInput =document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const gradeInput = document.getElementById("grade") as HTMLInputElement;


addBtn.addEventListener("click", () => {
    console.log("Button Clicked");
});


console.log(manager.getStudents());