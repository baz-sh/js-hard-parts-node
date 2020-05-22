# Node with HTTP

## Preparing for HTTPRequestObject

```js
const tweets = [ "Hi", "😆", "hello", "👋"];
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
    const tweetNeeded = incomingData.url.slice(8)-1;
    functionsToSetOutgoingData.end(tweets[tweetNeeded]);
}

const server = http.createServer(doOnIncoming)
server.listen(80);
```

1. Setup the server of node which sets the socket (`createServer`)
2. Setup a function to auto run by passing it into `createServer`
3. Setup in the JS label `server`, when run, links you directly back to node and the port adapter it created.

## Parsing HTTPRequestObject

Upon receipt of a message / request. Node will automcatically setup the request and response objects. We can look into this `request` object and find things such as line (url, method), Headers and Body (optional).

These objects (request / reponse) are passed into the auto run function (the method we can pass in to be run against each message when we call `createServer`).

## HTTP Response in Node

![http-response](/img/03-node-response.png)

## Response Headers

**Our return message is also in HTTP format.**

We can use the `body` to send the data and `headers` to send important metadata.

In the headers we can include info on the format of the data being sent back - e.g. it's `html` so to load it as a webpage.

## Intro to Require in Node

**Getting access to Node's built in features with `require`.**

We have to tell Node we want to have access to each of its C++ features independently - we get a built-in function to do this `require`.

```js
const http = require('http');
```

## JavaScript Node Development

**How do we start JavaScript off to do all this?**

1. Write the code (VSCode et al)
2. Load it into Node and run it (have to load in using the terminal interface)
3. Need to reload our code with Node everytime we make a change so nodemon

### Execute node

In a directory you could code a file e.g. server.js and using terminal, cd into directory and run `node server.js`.

## Cloud Node Development

**Do we need an always-on computer in our house to run a server?**

1. Write code on your computer
2. SSH into someone else's computer (one of AWS's)
3. Set up DNS to match domain name to right IP

## Local Node Development

**What about testing our server?**

Do you need to load the code to be run on a AWS computer?

OS developers included the loopback feature with `localhost` as the pseudo-domain.

We can run node locally on our machines with localhost (127.0.0.1). When we run `server.listen({PORT})` we can make requests by navigating to `localhost` and the port we are listening on.
