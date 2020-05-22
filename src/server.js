var http = require('http'); 

var onRequest = (req, res) => {
    var msg = `${req.method} on ${req.url}`;
    log(msg);
    res.end('Thanks!');
}
var server  = http.createServer(onRequest);
server.listen(80);

var log = (message) => {
    console.log(message);
}
