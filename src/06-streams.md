# Streams

## Introducign Node Streams

**What if Node used the 'event' (message-broadcasting) pattern to send out a message ('event') each time a sufficient batch of the json data had been loaded in.**

And at each point, take that data and start cleaning it - in batches.

```js
var fs = require('fs');
let cleanedTweets = "";

function cleanTweets(tweetsToClean) {
    //algorithm to remove "bad" words from tweets
}

function doOnNewBatch(data) {
    cleanedTweets += cleanTweets(data);
}

const accessTweetsArchive = fs.createReadStream('./tweetsArchive.json')

accessTweetsArchive.on('data', doOnNewBatch);
```

Introducing Event loop and Callback Queue...

## Node Streams Overview

Streams in computer science really are 'chunks' of data (in 64kb buckets).

The word 'stream' sounds a bit intimidating as in a constant flow of data that you need to manage.

Steams and how Node handles them are widely considered one of Nodes best features.

## Setting Up the Stream

When we call `const accessTweetsArchive = fs.createReadStream('./tweetsArchive.json')` Node / JS setup an object full of functions that have a connection to that stream of data. @64kb (configurable via the 'high watermark'), the event `data` get emitted. In our example, we pass in the 64kb of tweets to the `doOnNewBatch` function.

## Processing Data in Batches

The first batch of 64kb of data arrives to `doOnNewBatch` which recieves the contents of the `data` event.

`doOnNewBatch` passes the data to be cleaned then appents to the variable `cleanedTweets`.

As more processing is happening and the `data` event is being emitted as part of our `createReadStream`, it is placed onto the `callbackqueue`.

## Checking the Callback Queue

If there is no code to be run on the `callStack` then JS checks the `callbackQueue` and runs anything on here.

This is what's known as **_the event loop_**.

![stream-processing](/img/06-streams-1.png)

## Node Streams Q&A
