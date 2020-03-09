$.ajax({
	type: "GET",
	url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={94eb8f49abd52ce0348d1f50456d26a8}",
	success: function(weatherData) {

	$("#name").html(weatherData.title);
	$("#info").html(weatherData.explanation);
	$("#apod").attr("src", weatherData.url)
       }
    })
}
