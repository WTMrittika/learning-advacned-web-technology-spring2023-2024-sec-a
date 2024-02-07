import Student from './student';
import {Teacher} from './teacher';
import Course from './course';

const teacher1 = new Teacher(1, 'Alamin sir');
const teacher2 = new Teacher(1, 'Anika mam');
const student1 = new Student(102, 'Hrittika');
const student3 = new Student(103, 'Tasnim');
const student2 = new Student(101, 'Mrittika');

const course1 = new Course(1, 'WebTech', teacher1);
course1.addStudent(student1);
course1.addStudent(student2);

const course2 = new Course(2, 'OS', teacher2);
course2.addStudent(student1);
course2.addStudent(student3);

teacher1.addCourse(course1.courseName);
teacher2.addCourse(course2.courseName);

student1.enrollCourse(course1.courseName);
student1.enrollCourse(course2.courseName);
student3.enrollCourse(course1.courseName);
student2.enrollCourse(course2.courseName);

console.log(student1.toString());
student1.showCourses();

console.log(teacher1.toString());
teacher1.showCourses();

console.log(teacher2.toString());
teacher2.showCourses();

course1.showStudents();
course2.showStudents();
