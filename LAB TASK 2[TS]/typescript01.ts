//variable type annotation
let a: number=10;
let b:string ="hello";
let c:boolean=true;

function add(a: number, b:number): number{
    return a+b;
}
console.log(add(10, 20));

//type allias
type person = {id: number, name: string};
let p: person={id: 1, name: "john"};
console.log(p);

//type union
let y:number | string;
y=20;
console.log(y);

//literal type
let z:"red"|"green"|"blue";
z="red";
console.log(z);