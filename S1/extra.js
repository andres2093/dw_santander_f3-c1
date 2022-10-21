// FizzBuzz
function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, ' FizzBuzz')
    } else if (i % 3 === 0) {
      console.log(i, ' Fizz')
    } else if (i % 5 === 0) {
      console.log(i, ' Buzz')
    }
  }
}

// fizzBuzz()

let { random } = require('./principal.js')

console.log(random(1,5))