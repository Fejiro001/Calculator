// display values
let inputDisplay = document.getElementById("displaytext");
// select all numbers
const numberButtons = document.querySelectorAll("#num");
// select arithmetic operations
const operateButtons = document.querySelectorAll("#operate");
// equal button
const equalButton = document.getElementById("equal");
// clear display
const clearDisplay = document.getElementById("clear");


// convert nodelist to array
const numberButtonsArray = Array.from(numberButtons);
console.log(numberButtonsArray)