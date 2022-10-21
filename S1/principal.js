function sumarFn(num1, num2) {
  console.log(num1 + num2)
}

// sumar = (num1, num2) => console.log(num1 + num2)

function restarFn(num1, num2) {
  console.log(num1 - num2)
}

function multiplicarFn(num1, num2) {
  console.log(num1 * num2)
}

function dividirFn(num1, num2) {
  console.log(num1 / num2)
}

random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

function randomFn(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
  sumarFn,
  restarFn,
  multiplicarFn,
  dividirFn,
  random,
  randomFn
}