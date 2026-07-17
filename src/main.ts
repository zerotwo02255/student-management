console.log("🎓 Student Management System");


/*const student = [{


  name: "hari",
  email: "hari@gmail.com",
  IsEnrolled: true,
  Grade: 9.5,
  age: 22,
  course: "BBA"

},
{
  name: "ram",
  email: "ram@gmail.com",
  IsEnrolled: true,
  Grade: 10.5,
  age: 25,
  course: "BBS"

},

{
  name: "Sita",
  email: "sita@gmail.com",
  age: 23,
  Grade: 85,
  IsEnrolled: false,
  course :"science"
},




]//
console.log(student[0].name);
console.log(student[0].email);
console.log(student[0].age);
console.log(student[0].IsEnrolled);
console.log(student[0].Grade);
console.log(student[0].course);

console.log(student[1].name);
console.log(student[1].email);
console.log(student[1].age);
console.log(student[1].IsEnrolled);
console.log(student[1].Grade);
console.log(student[1].course);

console.log(student[2].name);
console.log(student[2].email);
console.log(student[2].age);
console.log(student[2].IsEnrolled);
console.log(student[2].Grade);
console.log(student[2].course);

*/


/* console.log("🎓 Student Management System");

function helllll( name :string ,grade :number){
  console.log(" hello my name is "+ name + "and i have got" + grade);
}

helllll("ram " ,123);
helllll("jeff " ,567)

*/


{
/* function add(a:number ,b:number): number{    




  return a+b ;

   }


  const total =add(10,20)

   console.log(total);


    function getName(): string {
     return "hari"

    }

   console.log(getName());

*/}

type StudentStatus = "Active" | "Inactive";

type Student = {
    id: number;
    name: string;
    age: number;
    status: StudentStatus;
};

const student1: Student = {
    id: 1,
    name: "Hari",
    age: 22,
    status: "Active",
};

console.log(student1);


type St={
  id :number;
  name :string;
};

const Studnet:St={
  id:20,
  name:"lamo sahra"
};

console.log(Studnet)

console.log(Studnet)

console.log("finally completed")
