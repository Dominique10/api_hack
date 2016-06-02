console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
//var yahooID = require('./script');

var params = {
	id: '2378426',
}

T.get('trends/place',params,gotData);

function gotData(err,data,response){
	//console.log(data);
	var tweets = data[0].trends;
	//console.log(tweets);
	for (var i = 0; i < tweets.length; i++) {
		//console.log(tweets[i].name);
		var trending = tweets[i].name;
		console.log(trendingNames);
	}
};