const fs = require('fs');

fs.watch('./somefile',()=>{
  console.log('File Changed');
})

/*
fs core module
Every time the specified file changes,callback gets called and prints File Changed to console
*/