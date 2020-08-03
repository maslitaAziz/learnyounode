// function that takes three arguments: the directory name, 
// the filename extension string and your callback function,
  // in that order.

const fs = require('fs')
const path = require('path')

 module.exports = function (directoryArg , extensionArg, callback) {
	fs.readdir(directoryArg, function(err, files) { 
		if (err) {
			return callback(err)
		}


   	files = files.filter(function (file) {
      return path.extname(file) === '.' + extensionArg
    })

    callback(null, files)
    	
    	
    })
}



/*

const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}*/