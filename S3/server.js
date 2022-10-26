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

// ejecutarWs(ordenar)

// Ejemplo 02
// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let numero = Math.random()
//     if(numero >= 0.5) resolve('Correcto ' + numero)
//     reject('Rechazada ' + numero)
//   }, 1000);
// })

// promesa
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

const fs = require('fs')

// let readFile = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf-8', (error, data) => {
//       if(error) return reject(error)
//       return resolve(data)
//     })
//   })
// }

// readFile("./archivo.txt")
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// let promesa1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "uno"))
// let promesa2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "dos"))
// let promesa3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "tres"))

// Promise.all([promesa1, promesa2, promesa3])
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// Reto 2
let readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if(error) return reject(error)
      return resolve(data)
    })
  })
}

// Promise.all([readFile("./archivo1.txt"), readFile("./archivo2.txt"), readFile("./archivo3.txt")])
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// Ejemplo 03
function obtenerPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
        let datos = "";

        resp.on("data", (chunk) => {
          datos += chunk;
        });

        resp.on("end", () => {
          try {
            datos = JSON.parse(datos)
            resolve(datos)
          } catch (error) {
            reject(error)
          }
        });
      })
      .on("error", (err) => {
        reject(err.message);
      });
  });
}

const pokemones = [
  "squirtle",
  "pidgey",
  "pikachu",
  "rattata",
  "alakazam",
  "onix",
  "mew",
  "wigglytuff",
];

async function atraparPokemones(pokemones) {
  try {
    let resultados = await Promise.all(
      pokemones.map(async (pokemon) => {
        let resultado = await obtenerPokemon(pokemon);
        console.log(`Pokemon atrapado ${pokemon}`);
        return resultado;
      })
    );
    return resultados
  } catch (error) {
    console.error("Error", error);
  }
}

atraparPokemones(pokemones)
  .then(data => console.log(data.length))
  .catch(error => console.log(error))