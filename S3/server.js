// Ejemplo 01
let funcion = (num1, num2, callback) => {
  callback("Hola")
  let res = num1 + num2
  callback(res)
}

// funcion(2, 5, (response) => console.log(response))
// funcion(2, 5, function(response){console.log(response)})

let fn1 = () => {
  setTimeout(() => console.log(1), 2000)
}
let fn2 = () => console.log(2)
let fn3 = () => console.log(3)

// fn1()
// fn2()
// fn3()

// setTimeout(function () {
//   console.log("Soy el 1");
//   setTimeout(function () {
//     console.log("Soy el 2");
//     setTimeout(function () {
//       console.log("Soy el 3");
//       setTimeout(function () {
//         console.log("Soy el 4");
//         // Podría a ver más llamadas asíncronas
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);