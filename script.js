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


allButtons.addEventListener('click', ev => {
  if (ev.target.matches('button')) {
    const btn = ev.target
    // data-action from html
    const action = btn.dataset.action
    // content of button
    const btnContent = btn.textContent
    // what is displyed in the div currently
    const displayedNum = inputDisplay.textContent

    // For the numbers
    if (!action) {
      // replace 0 with number clicked
      if (displayedNum === '0') {
        inputDisplay.textContent = btnContent
      } else {
        // append numbers
        inputDisplay.textContent = displayedNum + btnContent
      }
    }

    // For the operations
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      btn.classList.add('clickedOn')
    }

    // For decimal point
    if (action === 'decimal') {
      inputDisplay.textContent = displayedNum + btnContent
      // console.log('decimal key!')
    }
    
    if (action === 'clear') {
      console.log('clear key!')
    }
    
    if (action === 'calculate') {
      console.log('equal key!')
    }

    Array.from(btn.parentNode.children).forEach(b => b.classList.remove('clickedOn'))
  }
})



// convert nodelist to array
// const numberButtonsArray = Array.from(numberButtons);
// console.log(numberButtonsArray)