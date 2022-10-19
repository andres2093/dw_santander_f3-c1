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

module.exports = {
  sumarFn,
  restarFn,
  multiplicarFn,
  dividirFn
}