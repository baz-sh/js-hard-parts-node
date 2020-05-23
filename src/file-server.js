var fs = require('fs');

function cleanTweets(tweets) {
    console.log(`cleaning... ${tweets}`);
    return tweets;
}

function useImportedTweets(errorData, data) {
    const cleanedTweetsJson = cleanTweets(data);
    const tweetsObj = JSON.parse(cleanedTweetsJson);
    console.log(tweetsObj.tweets[3]);
}

fs.readFile('./tweets.json',useImportedTweets)
