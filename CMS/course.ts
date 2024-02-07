import {Teacher} from './teacher';
import Student from './student';

class Course {
  courseId: number;
  courseName: string;
  teacher: Teacher;
  students: Student[];

  constructor(courseId: number, courseName: string, teacher: Teacher) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.teacher = teacher;
    this.students = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  showStudents(): void {
    const studentNames = this.students.map(student => student.name);
    console.log(`Students enrolled in ${this.courseName}: ${studentNames}`);
  }
}

export default Course;