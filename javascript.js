$(document).ready(function(){
    $("#button").click(function(){
        var city = $("#city").val();
        console.log(city);

        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=94eb8f49abd52ce0348d1f50456d26a8",
            success: function(weatherData) {
                console.log(weatherData);
                
                var icon = "http://api.openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
                var temp = Math.floor(weatherData.list[0].main.temp) + "°F";
                var weather = weatherData.list[0].weather[0].main;

                $(".icon").attr('src', icon);
                $(".temp").append(temp);
                $(".weather").append(weather);

                //$(icon, temp, weather).empty();
            }
        });
    });
});