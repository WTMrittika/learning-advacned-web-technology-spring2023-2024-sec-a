function display(id, name) {
    console.log("Id: ".concat(id, "} and Name: ").concat(name));
}
display(101, "Steve");
//display<string>(102, "Billi"); //will show error since the types can only be string, not number
