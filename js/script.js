

var code;

$(document).ready( function(){
	$(".myForm"). submit( function(e){
		var location = $(this).find("input[name='userNameSearch']").val();
		getData(location);
		getTwitterTrends(code);
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

		$.ajaxSetup({
			headers:{ 'POST':'/oauth2/token',
				'Host': 'api.twitter.com',
				'User-Agent': 'My Twitter App v1.0.23',
				'Authorization': 'Basic WEk0NVhzeXJ5MkliWktSOHlCOU5FNWtmNzpyR1plS0ZBOFZkcEJUV2dKcGZjam1zM3NteXduSkFucm0xYTZsanB5UUZSSm9pZE9HdA==',
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'Content-Length': '29',
				'Accept-Encoding': 'gzip'
			}
		});

			$.ajax({
			  type: "POST",
			  url: 'https://api.twitter.com/1.1/trends/place.json?id='+code,
			  'grant_type':'client_credentials',
			  data: 'data',
			  //success: success,
			  dataType: 'jsonp'
			});
	}