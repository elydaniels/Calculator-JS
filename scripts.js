
//Get string on display with numbers and operator
let getDisplay = document.getElementById('result')
const insert = num => {
const number = getDisplay.innerHTML
getDisplay.innerHTML = number + num
}

//Clear
const clean = () => (getDisplay.innerHTML = '')

//Percent
const percent = () => {
const display = getDisplay.innerHTML
getDisplay.innerHTML = display * 0.01

}

//Action
const calculator = () => {
const result = getDisplay.innerHTML
if (result) {
getDisplay.innerHTML = stringMath(result)
} else {
getDisplay.innerHTML = 'Nothing...'
  }
}
