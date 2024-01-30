let numbers =[1,2,3,4,5];
let fruits =['Mango','Watermelon','Lichi'];
//number, striing, object, array in one array
let mixedArray = [1, 'two', {name: 'Alice'}, [7, 8, 9]];

console.log(numbers);
console.log(fruits);
console.log(mixedArray);

//accessing the array elements separately
let firstNumber =numbers[0];
console.log(firstNumber);
//OR the below one to directly access the element
console.log(numbers[0]);
let secondFruit = fruits[1];
console.log(secondFruit);
let thirdElement = mixedArray[2];
console.log(thirdElement);

//Adding and removing arrays (Array methods)
numbers.push(6);
fruits.pop(); //removes the last element
fruits.unshift('apple'); //adds element in the first place
numbers.shift(); //removes the first element

console.log(numbers);
console.log(fruits);

//Array iteration, forEach function
let newNumbers = [2, 3, 5, 7]
newNumbers.forEach(function(number){
    console.log(number);
});

//Array iteration map
let doubleNumbers = numbers.map(function(number){
    return number * 2;
})
console.log(doubleNumbers);

const evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});
console.log(evenNumbers);