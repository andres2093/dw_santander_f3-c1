const path = require('path')
const fs = require('fs')
// const server = require(path.join(__dirname, '', 'server.js'))

// fs.writeFile(path.join(__dirname, '/ejemplo_1.txt'), 'Este es mi archivo!!!', { encoding: 'utf-8' }, (error) => {
//   if (error) throw err
//   console.log('Archivo creado!!!')
// })

// fs.readFile(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8' }, (error, data) => {
//   if (error) throw err
//   console.log(data)
// })

// fs.appendFile(path.join(__dirname, '/ejemplo_1.txt'), '\nNueva linea!!!', { encoding: 'utf-8' }, (error) => {
//   if (error) throw err
//   console.log('Archivo actualizado!!!')
// })

fs.writeFileSync(path.join(__dirname, '/ejemplo_1.txt'), 'Este es mi archivo!!!', { encoding: 'utf-8' })

data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8' })
console.log(data)

fs.appendFileSync(path.join(__dirname, '/ejemplo_1.txt'), '\nNueva linea!!!')

data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8' })
console.log(data)