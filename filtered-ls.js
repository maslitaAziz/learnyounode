const fs = require('fs')

fs.readdir(process.argv[2], (err, files) => { 
   files.forEach(file => { 
   const allfile = file.split('.')   //split nama n ext

   if (allfile[1] == process.argv[3])  //utk make sure extension shj yg di uji
      		console.log(file); 
     //	console.log(allfile)
    }) 
 }) 

//line comment bwh ni keluar semua yg x ada extension tapi nama file cam extension
//	if (file.split('.').pop() == process.argv[3]) 


//compile
// node filtered-ls.js "C:/Users/Maslita/Documents/kursus back end/Class1/learnyounode" txt


//official solution
    // 'use strict'
    // const fs = require('fs')
    // const path = require('path')

    // const folder = process.argv[2]
    // const ext = '.' + process.argv[3]

    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })


//senaraikan semua file dlm directory
// fs.readdir(process.argv[2], (err, files) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("\nCurrent directory filenames:"); 
//     files.forEach(file => { 
//       console.log(file); 
//     }) 
//   } 
// }) 