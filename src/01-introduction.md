# Introduction

## The power of Node

* Most powerful technology in web development to emerge in 10 years
* Enables application that can handle millions of users without blocking
* From simple webpages to largest scaled applications, to Windows/Mac desktop apps (with Electron), and hardware (embedded systems)
* Allows us to build entire applications end-to-end in one language—JavaScript

## Node Overview

### Sending the right data back requires using multiple features of the computer

* Network socket- Receive and send back messages over the internet
* Filesystem- That's where the html/css/js code is stored in files
* CPU- for cryptography and optimizing hashing passwords
* Kernel- I/O management

Our dream—be able to use JavaScript to control this computer because (1) we know JavaScript and (2) it has some really nice design decisions

### Each programming language (PHP, Ruby, C++ JavaScript) have different levels of ability to interact with these features directly

C++ has many features that let it directly interact with the OS directly.

JavaScript does not! So it has to work with C++ to control these computers features. What is this combination known as? ... Node.js

JS -> Node -> Computer feature (e.g. network, file system)

## JavsScript, Node & The Computer

### We had better understand JavaScript to understand Node.js then

It's a language that does 3 things (and 1 involved a lot of help from C++)

1. Saves dta and functionality (code)
2. Uses that data by running functionality (code) on it
3. Has a ton of built-in labels that trigger Node features that are built in C++ to use our computer's internals

## Executing JavaScript Code Review

**Let's see the 2 things that JS does by itself-saving and using data.**

JavaScript saves data in memory, _global memory_.

```js
let num = 3;
// 1. Save a function (code to run, parameters awaiting inputs)
function multiplyBy2(intputNumber) {
    const result = inputNumber*2;
    return result;
}
// 2a. Call/run/invoke/execute a function (with parens)
//.. and 2b. insert an input (an argument)
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

## Executing Node Code

**So let's see JavaScript's other talent - built-in labels that trigger Node features.**

We can set up, with a JavaScript label, a Node.js feature (and so computer internals) to wait for requests for html/css/js/tweets from our users.

How? The most powerful build-in Node feature of all: `http` (and its assocuated built-in label in JS - also `http` conveniently).

### Using http feature of Node to set up an open socket

```js
const server = http.createServer();
server.listen(80);
```

Inbound web request -> run code to send back message

```if inbound message -> send back data```

But at what moment? 🥴
