var Botkit = require('../node_modules/botkit/lib/Botkit.js');
var Tweets = require('./tweets').Tweets;
var TwitterAPI = require('./twitterAPI').TwitterAPI;

var twitterAPI = new TwitterAPI();
var tweets = new Tweets(twitterAPI, ["CIA", "Farage"]);


// tweets.getTweets();

function get_response(){
  return tweets.tweets[Math.floor(Math.random() * tweets.tweets.length)];
}

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.SLACK_KEY
}).startRTM();

controller.hears(['wall'], 'ambient', function(bot, message) {
  if (tweets.tweets.length > 0) {
  bot.reply(message, get_response());
  }
});
