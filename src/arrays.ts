// Syntax 1
// keyword variableName = [value1,value2,value3];

// Syntax 2
// keyword variableName = new Array(value1,value2,value3);

// let fruits = ['apple', 'mango', 'kiwi'];
// const numberArray = [1,2,3];

// console.log(fruits[1]);
// fruits[1] = "strawberry"
// console.log(fruits[1]);

const numberAray = [1,2,3,4,5]
console.log(numberAray);


numberAray.push(6)
console.log(numberAray);

numberAray.pop();
console.log(numberAray);

numberAray.unshift(0);
console.log(numberAray);

numberAray.shift();
console.log(numberAray);

const slicedArray = numberAray.slice(0,3) // slice from 0 - 2
console.log(slicedArray)

const filterArray = numberAray.filter((num)=> num>2);
console.log(filterArray)

