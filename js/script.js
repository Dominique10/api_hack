

var code;

$(document).ready( function(){
	$(".myForm"). submit( function(e){
		var location = $(this).find("input[name='userNameSearch']").val();
		getData(location);
		//getTwitterTrends(code);
		getAccessToken();
		//console.log("{{treading}}");
		e.preventDefault();

		$.post( "https://api.twitter.com/oauth2/token", 'grant_type=client_credentials')
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
	})
});

function getData(location){
	var request = new XMLHttpRequest();
	request.open("GET", "http://where.yahooapis.com/v1/places.q("+location+")?appid=dj0yJmk9VHJvR2lOSVhMa3JNJmQ9WVdrOVdUZzNhRWh3TTJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zOA--", false);
	request.send();
	var xml = request.responseXML;
	var places = xml.getElementsByTagName("place");
	for(var i = 0; i < places.length; i++) {
	    var place1 = places[i];
	    code = place1.firstElementChild.textContent;
	    return code;
	}
}

 function getTwitterTrends(code){

		// $.ajaxSetup({
		// 	headers:{ 
		// 		//'POST':'/oauth2/token',
		// 		Host: 'https://api.twitter.com',
		// 		//'User-Agent': 'My Twitter App v1.0.23',
		// 		Authorization: 'OAuth oauth_consumer_key="DC0sePOBbQ8bYdC8r4Smg",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1465240643",oauth_nonce="63424368",oauth_version="1.0",oauth_token="737704661025759232-aHAvF60M5ERuLvTKVVRdVqruVe5IDoN",oauth_signature="36zZ5IwTDooWmrQGwHOFcBa54Lk%3D"',
		// 		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		// 		//'Content-Length': '29',
		// 		//'Accept-Encoding': 'gzip'
		// 		//connection:'Keep-Alive'
		// 	}
		// });

		// 	$.ajax({
		// 	  type: "POST",
		// 	  url: 'https://api.twitter.com/oauth2/token',
		// 	  'grant_type':'client_credentials',
		// 	  //data: 'data',
		// 	  //success: success,
		// 	  dataType: 'jsonp'
		// 	});

	// 	var request2 = new XMLHttpRequest();
	// request2.open("POST", "https://api.twitter.com/1.1/oauth2/token", true);
	// request2.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="DC0sePOBbQ8bYdC8r4Smg",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1465240643",oauth_nonce="63424368",oauth_version="1.0",oauth_token="737704661025759232-aHAvF60M5ERuLvTKVVRdVqruVe5IDoN",oauth_signature="36zZ5IwTDooWmrQGwHOFcBa54Lk%3D"');
	// request2.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
	// //request2.setRequestHeader('');
	// request2.send();
	//var xml = request.responseXML;
	//var places = xml.getElementsByTagName("place");
	// for(var i = 0; i < places.length; i++) {
	//     var place1 = places[i];
	//     code = place1.firstElementChild.textContent;
	//     return code;
	// }
	}
	function getAccessToken () {
    // var secret = encodeURI("xxx");
    // var key = encodeURI("yyy");
    // var keyAndSecret = key + ":" + secret;
    var encoded = 'WEk0NVhzeXJ5MkliWktSOHlCOU5FNWtmNzpyR1plS0ZBOFZkcEJUV2dKcGZjam1zM3NteXduSkFucm0xYTZsanB5UUZSSm9pZE9HdA==';

    var authRequest = new XMLHttpRequest();
    authRequest.open("POST", "https://api.twitter.com/oauth2/token");

    authRequest.setRequestHeader("Authorization", "Basic " + encoded);
    authRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    // authRequest.onreadystatechange = function () {
    //     //if (authRequest.readyState == 4) {
    //         var accessToken = JSON.parse(authRequest.response);
    //         console.log("access token:", accessToken);
    //     }
    // }           
    
    var postData = "grant_type=client_credentials";
    //authRequest.setRequestHeader("Content-Length", postData.length);
    authRequest.send(postData);

	 }