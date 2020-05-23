# Asynchronicity in Node

The queues and their priority are:

* Micro task queue
* Timer queue
* I/O queue
* Check queue

These are 'owned' / managed by the event loop.

**The call stack, event loop and callback queue in Node.**

* **Call stack:** JavaScript keeps track of what function is being run and where it was run from. Whenever a function is to be run, it's added to the call stack.
* **Callback queue:** any functions delayed from running (and run automatically by Node) are added to the callback queue when the background Node task has completed (or there's been some activity like a request).
* **Event loop:** determines what function/code to run next from the queue(s).

## Introduction to Asynchronicity

**The event loop is very strict. What rules does it set for what code to run next and when it may run?**

```js
function useImportedTweets(errorData, data) {
    const tweets = JSON.parse(data);
    console.log(tweets.tweet1)
}
function immediately(){console.log('Run me last :(')}
function printHello(){console.log("hello")}

function blockFor500ms() {
    // Block JS thread DIRECTLY for 500 ms
    // eWith e.g. a for loop with 5m elements
}

setTimeout(printHello,0);

fs.readFile('./tweets.json', useImportedTweets)

blockFor500ms();

console.log('me first!');
setImmediate(immediately);
```

## Timer Queue

There aren't really timers in Node. The event loop keeps checking the function definition to determine if enough time has elapsed for the body of the function to be run.

`setTimeout(printHello, 0)` is an instruction to Node to craete a 'timer' with 0 millisecond to delay and when that fires, `printHello()`.

Anything that's been passed into Node (or set to autorun by Node, e.g. onRequest) all this code gets bottom priority for when all our JS code has run.

The first queue to be checked is the timer queue.

In a way, all `setTimeout` does is tell you when it's going to be put in the timer queue, _not_ when it's going to be run.

When we run `fs.readFile('./tweets.json', useImportedTweets)` Node create a little interface to the file system, it also creates this on a thread responsible for the operation.

## IO Queue

The next queue is the 'i/o callback queue'. Anything that involves data coming from the file system or network sockets get added to this queue.

In this example this would be `useImportedTweets`.

## Check Queue

The third prioritised queue is called the 'check queue'. Things can be added to this queue by writing `setImmediate(function())`.

This is a really bad method name. It's not run immediately. However, once the timer queue _and_ the i/o queue are cleared, the check queue is then cheked.

## Microtask & Close Queues

The micro task queue is priority 0, the highest (besides global, if you consider it it's own form of queue I guess).

The micro task queue is also checked _between_ the checking of the timer, callback and check queues.

The micro task queue has two tiers (or queues 🥴)

Microtask Queue:

* if we run a function like, process.nextTick()
* any function delayed by a promise

There is a final queue, the close queue. This queue contains any functions that we're supposed to be run on the closing of a stream.

## Priority of Queue Exection

**Rules for the automatic exection of the JS code by Node.**

1. Hold each deferred function in one of the task queues when the Node background API 'completes'
2. Add the function to the Call stack (i.e. execute the function) ONLY when the call stack is totally empty (Have the Event Loop check this condition)
3. Prioritize functions in Timer 'queue' over I/O queue, over setImmediate('check') queue
