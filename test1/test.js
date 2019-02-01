var http = require('http');

http.createServer((req,res) => {
    console.log("sex");
    console.log(req);
    console.log(res);
}).listen(3000);