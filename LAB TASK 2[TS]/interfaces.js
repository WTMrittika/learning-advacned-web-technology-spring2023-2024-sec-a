var Employee3 = /** @class */ (function () {
    function Employee3(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee3.prototype.display = function () {
        console.log("Id: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return Employee3;
}());
var emp3 = new Employee3(2, "JOHN");
emp3.display();
