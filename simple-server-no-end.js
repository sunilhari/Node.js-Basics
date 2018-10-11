const http = require('http');
const server = http.createServer((request,response)=>{
  response.write('Hello World');
  //no reponse.end here
})
server.listen(3000,()=>{
  console.log('Server running');
});
/*
Execute this by running node simple-server.js
//output Server Running
//Page keeps on loading and it never ends.The loading symbol on title bar keeps rotating

Explaination

  Response is a stream.So if its not ended it would assume that there are more data to be send across and it would wait
*/