const modulesaya = require('./mymodule.js')

const directoryArg = process.argv[2]
const extensionArg = process.argv[3]

modulesaya(directoryArg, extensionArg, function (err, files) {
  if (err) {
    return console.error('There was an error:', err)
  }

  files.forEach(function (file) {
    console.log(file)
  })
})