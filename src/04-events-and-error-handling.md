# Events & Error Handling

## Error Handling in Node

**In server side development we get errors.**

Understandable - we're interacting with others' computers over the internet - there's lots of issues that could arise.

How we can handle this? We need to understand our background Node http server feature better.

**Node will automatically send out the appropriate event depending on what it gets from the computer internals (http message or error 😭).**

```js
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
    functionsToSetOutgoingData.end("Welcome to twitter");
}

function doOnError(infOnError) {
    console.log(infoOnError)
}

const server = http.createServer();
server.listen(80);

server.on('request', doOnIncoming);
server.on('clientError', doOnError);
```

## Event Handling in Node

When we execute `server = http.createServer();` what happens is Node setups up a little network socket ready for listening to requests, and also returned to `server` is an object full of methods which can be used to edit the created Node http instance.

## Modifying the Node Server

Using methods like `server.on('request', onRequest)` we are able to hook up methods to run when certain things happen. Such as request, clientError, etc. More can be found on the [node-js-events-docs](https://nodejs.org/api/events.html).

## Node Event Handling in Action

![events-in-action](/img/04-events-in-action.png)