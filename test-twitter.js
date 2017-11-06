var twitter = require('twitter');
var config = require('./config');
var client = new twitter(config.twitter);

client.get('search/tweets', {q: 'JavaScript' }, function(err, tweets, response) {
    if (err) throw err;
    console.log(tweets);
});