var Twit = require('twit');

var T = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...'
});

function retweetRecent() {
    T.get('search/tweets', {q: "#burningman", result_type: "recent"},
      function (err, data, response) {
        ...
    });
}
