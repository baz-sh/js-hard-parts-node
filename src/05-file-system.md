# File System

## Introducing the File System API

**We have much of our twitter app set up now - handling, inspecting and responding to these messages ('requests') is the core of our app, of Node, and of servers.**

* But, Node can do even more. We have an archive of tweets store in a huge file (1.5GB)
* Unfortunately they're saved on our computer, not in our little JavaScript-specific data store (JS memory)
* Could we load them in JavaScript to run a function that removes bad tweets?
* We can use `fs` to do so but there might be some issues with a file that large

## Importing with fs

**Importing our tweets with fs.**

```js
function cleanTweets(tweetsToClean) {
    //code that removes bad tweets
}
function userImportedTweets(errorData, data) {
    const cleanedTweetsJson = cleanTweets(data);
    const tweetsObj = JSON.parse(cleanedTweetsJson);
    console.log(tweetsObj.tweet2)
}
fs.readFile('./tweets.json', useImportedtweets)
```

* Every file has a 'path'(a link-like a domestic url)
* JSON is a javascript-ready data format

_[Node docs on File System](https://nodejs.org/api/fs.html#fs_file_system)_

fs is an abbreviation for "File Storage/System". It is another interface in Node that allows you to modify files on the system. Like HTTP, Node uses C++ and talks to lower level drivers and returns objects to you which you can modify.

The interface between Node and the underlying system is known as `libUV`.

## Reading from the File System with fs

**Importing our tweets with fs.**

```js
var fs = require('fs');

function cleanTweets(tweets) {
    console.log(`cleaning... ${tweets}`);
    return tweets;
}

function useImportedTweets(errorData, data) {
    const cleanedTweetsJson = cleanTweets(data);
    const tweetsObj = JSON.parse(cleanedTweetsJson);
    console.log(tweetsObj);
}

fs.readFile('./tweets.json',useImportedTweets)
```
