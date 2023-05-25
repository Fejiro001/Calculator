// display values
let inputDisplay = document.getElementById("displaytext");
// all buttons on the calculator
const allButtons = document.getElementById("btn_display");
// select all number buttons
const numberButtons = document.querySelectorAll("#num");
// select arithmetic operations
const operateButtons = document.querySelectorAll("#operate");
// equal button
const equalButton = document.getElementById("equal");
// clear display
const clearDisplay = document.getElementById("clear");
const calc_button = document.querySelectorAll(".calc_button")
// theme
var themeChange = document.querySelector("#theme");


allButtons.addEventListener('click', ev => {
  if (ev.target.matches('button')) {
    // the button element
    const btn = ev.target
    // data-action from html
    const action = btn.dataset.action
    // content of button
    const btnContent = btn.textContent
    // what is displyed in the div currently
    const displayedNum = inputDisplay.textContent

    // For the numbers
    // the numbers do not have action attribute
    if (!action) {
      // replace 0 with number clicked
      if (displayedNum === '0') {
        inputDisplay.textContent = btnContent
      } else {
        // append numbers if its not 0
        inputDisplay.textContent = displayedNum + btnContent
      }
    }
    // For the operations
    let result1 = 0;
    let result2 = 0;
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      // btn.classList.add('clickedOn')
      // if the displayed value isn't 0 save the value in a variable
      if (displayedNum !== "0") {
        result1 = displayedNum
        console.log(result1)
        inputDisplay.replaceChildren("0")
        if (displayedNum === "0") {
          result2 = displayedNum
          console.log(result1, result2)
        }

      }

    }

    // For decimal point
    if (action === 'decimal') {
      // check if . is not already diaplayed
      if (displayedNum.includes(".") === false) {
        inputDisplay.textContent = displayedNum + btnContent
      }
    }

    // clear display
    if (action === 'clear') {
      inputDisplay.replaceChildren("0")
      console.log('clear key!')
    }

    if (action === 'delete') {
      
      console.log('delete')
    }

    // final calculation
    if (action === 'calculate') {
      console.log('equal key!')
      // remove depression from the operation keys
      Array.from(btn.parentNode.children).forEach(b => b.classList.remove('clickedOn'))
    }
  }
})

// themeChange.addEventListener('click', () => {
//   calc_button.style.backgroundColor = 'white'
// })

// convert nodelist to array
// const numberButtonsArray = Array.from(numberButtons);
// console.log(numberButtonsArray)