const bl = require('bl')
const http = require('http')

http.get(process.argv[2], function (result) {
    result.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})