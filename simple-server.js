const http = require('http');
const server = http.createServer((request,response)=>{
  response.write('Hello World');
  response.end();
})
server.listen(3000,()=>{
  console.log('Server running');
});
/*
Execute this by running node simple-server.js
//output Server Running

Explaination

http is a core module that comes with node installation.
require('http) imports the library and returns the object to http variable
http.createServer would create a server.The callback has two arguments,namely request object and response object
  request would have all you request params,headers
  response is used to send response headers,data back to the requestor - Writable Stream
Finally it listens to the port specified to the listen function
*/