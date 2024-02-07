"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(id, name) {
        this.id = id;
        this.name = name;
        this.coursesTaught = [];
    }
    Teacher.prototype.addCourse = function (courseName) {
        this.coursesTaught.push(courseName);
    };
    Teacher.prototype.showCourses = function () {
        console.log("".concat(this.name, "'s taught courses: ").concat(this.coursesTaught));
    };
    Teacher.prototype.toString = function () {
        return "Teacher - ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
