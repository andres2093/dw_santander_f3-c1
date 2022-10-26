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

// Reto 1
const https = require('https')

ordenar = res => {
  console.log(res[0].films.length);
  console.log(res[0].name);

  res.sort((a, b) => {
    if (a.films.length > b.films.length) {
      return 1;
    }
    if (a.films.length < b.films.length) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  res.sort((a, b) => a.name.localeCompare(b.name)).reverse()

  console.log(res[0].films.length);
  console.log(res[0].name);

  // for(i in res){
  //   console.log(res[i].name);
  //   console.log(res[i].gender);
  // }
}

ejecutarWs = callback => {
  https.get('https://swapi.dev/api/people/', res => {
    let data = ''

    res.setEncoding('utf-8')
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      try {
        let body = JSON.parse(data)
        callback(body.results)
      } catch (error) {
        console.log(error);
      }
    })
  }).on('error', err => console.log('Error', err))
}

ejecutarWs(ordenar)