const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./Big.txt'); //specify a big file here
  src.pipe(res);
});

server.listen(8000);

/*
Explaination can be would in the wiki page associated with this repo
*/