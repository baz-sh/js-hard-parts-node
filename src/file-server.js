var fs = require('fs');

//********
// Reading a file

// function cleanTweets(tweets) {
//     console.log(`cleaning... ${tweets}`);
//     return tweets;
// }

// function useImportedTweets(errorData, data) {
//     const cleanedTweetsJson = cleanTweets(data);
//     const tweetsObj = JSON.parse(cleanedTweetsJson);
//     console.log(tweetsObj.tweets[3]);
// }

// fs.readFile('./tweets.json',useImportedTweets)

//********
// Using a stream
let cleanedTweets = "";
function cleanTweets(tweetsToClean) {
    //algorithm to remove "bad" words from tweets
    return tweetsToClean;
}
function doOnNewBatch(data) {
    cleanedTweets += cleanTweets(data);
    console.log(cleanedTweets);
}

let finish = () => console.log("finished!");

const accessTweetsArchive = fs.createReadStream('./tweets.json')
accessTweetsArchive.on('data', doOnNewBatch);
accessTweetsArchive.on('close', finish);
