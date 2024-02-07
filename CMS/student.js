"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
    }
    Student.prototype.enrollCourse = function (cname) {
        this.courses.push(cname);
    };
    Student.prototype.showCourses = function () {
        console.log("Enrolled Courses for ".concat(this.name, ": ").concat(this.courses));
    };
    Student.prototype.toString = function () {
        return "Student - ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Student;
}());
exports.default = Student;
