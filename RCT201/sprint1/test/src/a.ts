type Student = { rollNo: number; fullName: string; age: number };
type Instructor = { id: number; name: string; subject: string };

let students: Student[] = [
  { rollNo: 1, fullName: "A B", age: 21 },
  { rollNo: 2, fullName: "R F", age: 27 },
];

let instructors: Instructor[] = [
  { id: 1, name: "A B", subject: "RCT-101" },
  { id: 2, name: "R F", subject: "RCT-201" },
];

function getStudent<Type>(arg: Type[], index: number): Type {
  return arg[index];
}

getStudent<Student>(students, 0); // Okay
getStudent<Instructor>(instructors, 0); // Okay