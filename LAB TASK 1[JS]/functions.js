function greet(name){
    console.log(`Hello, ${name}!`);
}
greet ("Alice");

//function return
function sum(a, b){
    return a+b;
}
let result = sum(1, 2);
console.log(result);

//Arrow function
let hello = name => console.log(`Hello, ${name}!`);
hello("Mrittika");

//Anonymous function
const hii = function(name){
    console.log(`Hello, ${name}!`);
};
hii("Rayhan");

//passing functions as parameters
function operateOnNumbers(a, b, operation){
    return operation(a, b);
}
//func to add 2 numbers
function add(x, y){
    return x + y;
}
//func to multiply 2 numbers
function multiply(x, y){
    return x * y;
}

let additionResult = operateOnNumbers(5, 4, add);
let multiplicationResult = operateOnNumbers(5, 4, multiply);

console.log(additionResult);
console.log(multiplicationResult);

