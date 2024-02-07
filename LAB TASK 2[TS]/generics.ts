function display<T>(id: T, name:T): void {
    console.log(`Id: ${id} and Name: ${name}`);
}
display<number | string>(101, "Steve");
//display<string>(102, "Billi"); //will show error since the types can only be string, not number