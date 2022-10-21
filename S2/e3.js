const https = require('https')

function getAPOD() {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = ''
    resp.setEncoding('utf-8')
    resp.on('data', (chunk) => {
      data += chunk
    })

    resp.on('end', () => {
      let body = JSON.parse(data)
      console.log(body.title)
      console.log(body.explanation)
      console.log(body.url)
    }).on("Error", (err) => {
      console.log(err.message)
    })
  })
}
getAPOD()