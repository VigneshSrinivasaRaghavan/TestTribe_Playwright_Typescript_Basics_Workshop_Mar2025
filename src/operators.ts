// Arithmetic Operators
let a = 20;
let b = 10;
let sum = a + b;
let difference = a - b;
let multiply = a * b;
let division = a/b; // Always gives only quotient
let modulus = a%b; // Always gives only reminder

// Comparison operator
let x = 5;
let y = 10;
let isLooseEqual = x==y;
let isStrictEqual = x===y; 
let notEqual = x!=y
let greaterThan = x>y;
let greaterThanEqual = x>=y;
let lowerThan = x<y;
let lowerThanEqual = x<=y;

// Logical operators --> Always only for boolean
// 1 - true and 0 - false
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
let notResult = !isTrue // false

// Assignment Operator
let num = 5;
num += 5 // num = num + 5
num -= 3 // num = num - 3
num *= 3 // num = num * 3
num /= 3 // num = num / 3
num %= 3 // num = num % 3

// Ternary Operator
// Syntax
// keyword variableName = condition ? passValue : failValue

let age = 10;
let message = age>=18 ? "Adult" : "Minor"
console.log(message);