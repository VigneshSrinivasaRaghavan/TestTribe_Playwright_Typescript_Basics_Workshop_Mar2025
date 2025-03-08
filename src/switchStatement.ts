// Syntax of Switch Block

/*
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  // Additional cases as needed
  default:
    // Code to be executed if none of the cases match
}
*/

let day = 10;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tue";
        break;
    case 3:
        dayName = "Wed";
        break;
    case 4:
        dayName = "Thur";
        break;
    case 5:
        dayName = "Fri";
        break;
    case 6:
        dayName = "Sat";
        break;
    case 7:
        dayName = "Sun";
        break;
    default:
        dayName = "This is not a valid Day"
}

console.log(dayName);