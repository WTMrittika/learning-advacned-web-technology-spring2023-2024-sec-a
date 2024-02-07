interface IEmployee{
    id: number;
    name: string;
    display(): void;
}
class Employee3 implements IEmployee{
    id:number;
    name: string;
    constructor(id: number, name: string) {
        this.id=id;
        this.name=name;
    }
    display(): void{
        console.log(`Id: ${this.id}, Name: ${this.name}`);

    }
}
let emp3= new Employee3(2, "JOHN");
emp3.display();