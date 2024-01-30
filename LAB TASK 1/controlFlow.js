//if, else if, else
let age = 12;
if(age>=18){
    console.log("Adult");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else{
    console.log("hobe kichu ekta")
}

//switch case
let status;
switch(true){
    case age>=18:
        status = "Adult";
        break;
    case age>=13 && age<=19:
        status = "Teenager";
        break;
    default:
        status = "hobe kichu ekta";
}
console.log(status);