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

const lista = []

for (let i = 0; i < 50000; i++) {
  lista.push(random(i, 100))
}

console.log(lista)

// Burbuja
// for (let k = 1; k < lista.length; k++) {
//   for (let i = 0; i < (lista.length - k); i++) {
//       if (lista[i] > lista[i + 1]) {
//           aux = lista[i];
//           lista[i] = lista[i + 1];
//           lista[i + 1] = aux;
//       }
//   }
// }

// console.log('Burbuja')
// console.log(lista)

// Casilleros
const l = lista.length;
let j, temp;

for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = lista[ i ];
    while ( j > 0 && lista[ j - 1 ] > temp ) {
        lista[ j ] = lista[ j - 1 ];
        j--;
    }
    lista[ j ] = temp;
}

console.log('Casilleros')
console.log(lista)