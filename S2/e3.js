const https = require('https')
const path = require('path')
const fs = require('fs')

descargarImagen = (url, imagenName) => {
  let file = fs.createWriteStream(path.join(__dirname, imagenName + ".png"))
  https.get(url, res => res.pipe(file))
}

function getAPOD() {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = ''
    resp.setEncoding('utf-8')
    resp.on('data', (chunk) => {
      data += chunk
    })

    resp.on('end', () => {
      try {
        let body = JSON.parse(data)
        console.log(body.title)
        console.log(body.explanation)
        console.log(body.url)

        descargarImagen(body.url, body.title)
      } catch (error) {
        console.log(error)
      }
    }).on("Error", (err) => {
      console.log(err.message)
    })
  })
}
getAPOD()