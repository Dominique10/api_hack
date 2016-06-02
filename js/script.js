$(document).ready( function(){
	$(".myForm"). submit( function(e){
		var location = $(this).find("input[name='userNameSearch']").val();
		getData(location);
		gotData(code);
		console.log("{{treading}}");
		e.preventDefault();
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
	    var code = place1.firstElementChild.textContent;
	    return code;
	}
}
