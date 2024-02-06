//any type
let data:any;
data="something";
console.log(data);
//enum type
enum Color{red, green, blue};
let color: Color=Color.blue;
console.log(color);
//tuple type
let employee:[number, string];
employee=[2, "Mrittika"];
console.log(employee);
//array
let numbers:number[]=[1, 2, 3, 4, 5];
//accessing elements
let firstElement:number=numbers[0];
console.log(firstElement);
//array length
let arraylength:number=numbers.length;
console.log(arraylength);
//adding elements
numbers.push(6);
//iterating thru elements
for(let num of numbers){
    console.log(num);
}
//array methods
let doubledNumbers: number[]=numbers.map((num:number)=>num*2);
let evenNumbers: number[]=numbers.filter((num:number)=>num%2==0);
let sum:number =numbers.reduce((prev:number, next:number)=>prev+next);
console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sum);

//functions
function addnumbers(a:number, b:number):number{
    return a+b;
}
console.log(addnumbers(10, 20));

//arrow functions
let addNumbers=(a:number, b:number):number=>a+b;
console.log(addNumbers(10, 20));

//optional parameters
function addNum(a:number, b:number, c?: number):number{
    return a+b+(c??0);
}
console.log(addNum);

//rest parameters
function addnum(...nums:number[]):number{
    let sum:number=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}
console.log(sum);

//function overloading
function addNumberss(a:number, b:number):number;
function addNumberss(a:string, b:string):string;
function addNumberss(a:any, b:any):any{
    return a+b;
}
console.log(addNumberss(10, 20));

