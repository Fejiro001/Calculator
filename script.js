let displaytext = document.getElementById("displaytext");
// select all numbers
let calc_button = document.querySelectorAll("#num");
// console.log(calc_button[0].innerHTML)


// on clicking any button (0 - 9)
calc_button.forEach(btn => {
  btn.addEventListener("click", pickANumber);
});