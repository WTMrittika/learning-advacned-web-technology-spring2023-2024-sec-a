//any type
var data;
data = "something";
console.log(data);
//enum type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var color = Color.blue;
console.log(color);
//tuple type
var employee;
employee = [2, "Mrittika"];
console.log(employee);
//array
var numbers = [1, 2, 3, 4, 5];
//accessing elements
var firstElement = numbers[0];
console.log(firstElement);
//array length
var arraylength = numbers.length;
console.log(arraylength);
//adding elements
numbers.push(6);
//iterating thru elements
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//array methods
var doubledNumbers = numbers.map(function (num) { return num * 2; });
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sum);
//functions
function addnumbers(a, b) {
    return a + b;
}
console.log(addnumbers(10, 20));
