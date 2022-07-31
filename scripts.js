<<<<<<< HEAD

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
=======
let getEl = document.getElementById('result')
const insert = num => {
  const number = getEl.innerHTML
  getEl.innerHTML = number + num
}

const clean = () => (getEl.innerHTML = '')

const percent = () => {
  const numb = getEl.innerHTML
  getEl.innerHTML = numb * 0.01
}

const calculator = () => {
  const result = getEl.innerHTML
  if (result) {
    getEl.innerHTML = eval(result)
  } else {
    getEl.innerHTML = 'Nothing...'
  }
}
>>>>>>> 315f0398c60aca31532ad3f5dbf4c293e345964e
