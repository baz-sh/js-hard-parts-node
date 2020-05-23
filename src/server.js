var http = require('http'); 

let logHasHeader = false;

var onRequest = (req, res) => {
    var msg = `${req.method} on ${req.url}`;
    log(msg);
    res.end('Thanks!');
}

var server  = http.createServer();
server.listen(80);

const log = (message) => {
    if (!logHasHeader) {
        addConsoleHeader();
    }
    console.log(`* ${message}`);
    console.log('***********')
}

const addConsoleHeader = () => {
    console.log('***********')
    logHasHeader = true;
}

server.on('request', onRequest);
