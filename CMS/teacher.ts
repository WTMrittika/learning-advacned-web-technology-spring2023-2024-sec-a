class Teacher {
    id: number;
    name: string;
    coursesTaught: string[];
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.coursesTaught = [];
    }
  
    addCourse(courseName: string): void {
      this.coursesTaught.push(courseName);
    }
  
    showCourses(): void {
      console.log(`${this.name}'s taught courses: ${this.coursesTaught}`);
    }
  
    toString(): string {
      return `Teacher - ID: ${this.id}, Name: ${this.name}`;
    }
  }

  //can also be written as export default Teacher; 
  //since that is a good practice when only a single entity is exported
  //for example class, a function or object, in this case its a class
export {Teacher};