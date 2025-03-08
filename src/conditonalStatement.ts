// If Block
// Syntax
/*
if(condition){
// code to be executed when condition is met
}

*/


let age1 = 10;
if(age1>=18){
    console.log("Adult");
}

// If Else Block
// Syntax
/*
if(condition){
// code to be executed when condition is met
}
else {
}
*/

let age2 = 80;
if(age2>=18){
    console.log("Adult");
}
else {
    console.log("Minor");
}

// If - Else - If Block
// Syntax
/*
if(condition){
// code to be executed when condition is met
}
else if(condition){
}
else if(condition){
}
else {
}
*/
let age3 = 40;
if(age3>=0 && age3<=10){
    console.log("Child");
}
else if(age3>=11 && age3<=20){
    console.log("Teenage");
}
else if(age3>=21 && age3<=60){
    console.log("Adult");
}
else{
    console.log("Old Age");
}

// Nested If Else
let age4=10;
if(age4>=0 && age4<=60 ){
    if(age4>=0 && age4<=10){
        console.log("Child");
    }
    else if(age4>=11 && age4<=20){
        console.log("Teenage");
    }
}
else{
    console.log("Old - Age")
}