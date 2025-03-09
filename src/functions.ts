// Syntax

/*
function functionName() {
// Code logic
}
*/

function greeting(){
    console.log('I am a function');
}

greeting()


/*
function functionName(parameterName:parameterDataType) {
// Code logic to use the parameterName
}
*/

function greeting1(studentName:string){
    // console.log('Hi ',studentName);
    console.log(`Hi ${studentName}`);
}

greeting1("Vignesh")
greeting1("Atul")
greeting1("Deepesh")

/*
function functionName(parameterName:parameterDataType) {
// Code logic to use the parameterName
return <returnValue>
}
*/

function add(a:number, b:number){
    return a+b;
}

console.log(add(2,3));


/*
function functionName(parameterName?:parameterDataType,parameterName?:parameterDataType=defaultValue) {
// Code logic to use the parameterName
return <returnValue>
}
*/

function greeting2(studentName:string="Vignesh",location?:string){
    console.log(`Hi ${studentName} joining from ${location}`);
}
let nitinName = "Nithin"
greeting2(nitinName,"Kerala");