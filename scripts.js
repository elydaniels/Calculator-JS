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