const bl = require('bl')
const http = require('http')

let kira = 0
const result = []

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      result[index] = data.toString()
      kira++

      if (kira === 3) {
        for (let i = 0; i < 3; i++) {
          console.log(result[i])
      }
    }

    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}