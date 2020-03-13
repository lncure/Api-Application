$(document).ready(function(){
$("#weatherButton").click(function(){
    var city = $("#city").val();
    console.log(city);

    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=94eb8f49abd52ce0348d1f50456d26a8",
        success: function(weatherData) {
            console.log(weatherData);

            //Datetracking
            var i = 1;

            //Weathertracking
            var j = 0;

            //Icontracking
            var l = 0;

            var icon = "http://api.openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
            var temp = Math.floor(weatherData.list[0].main.temp) + "°F";
            var weather = weatherData.list[0].weather[0].main;
            var date = weatherData.list[0].dt_txt;

            $(".icon").attr('src', icon);
            $(".temp").append(temp);
            $(".weather").append(weather);
            $(".date").append(date);

            ///////////////////////////////////
            //////////FUTURE AND PAST//////////
            ///////////////////////////////////
                $("#next").click(function(){ 
                    date = weatherData.list[i].dt_txt;
                    weather = weatherData.list[i].weather[0].main;
                    temp = Math.floor(weatherData.list[i].main.temp) + "°F";
                    icon = "http://api.openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                    i++;
                    
                    //safe keeping
                    if(i > 38){
                        alert("ERROR, You've reached your limit, turn back now.");
                        i = 38;
                    }

                    console.log(i);
                    //EMPTY AND FILL THE DATE
                    $(".date").empty();
                    $(".date").append(date);

                    //EMPTY AND FILL THE WEATHER
                    $(".weather").empty();
                    $(".weather").append(weather);

                    //EMPTY AND FILL THE TEMP
                    $(".temp").empty();
                    $(".temp").append(temp);

                    //EMPTY AND FILL THE ICON
                    $(".icon").empty();
                    $(".icon").attr('src', icon);
                    console.log(icon);
                });

                $("#prev").click(function(){
                    date = weatherData.list[i].dt_txt;
                    weather = weatherData.list[i].weather[0].main;
                    temp = Math.floor(weatherData.list[i].main.temp) + "°F";
                    icon = "http://api.openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                    i--;

                    //safe keeping
                    if(i < 1){
                        alert("ERROR, do not mess with the wibbley wobbley timey whimey stuff");
                        i = 1;
                    }

                    console.log(i);
                    //EMPTY AND FILL THE DATE
                    $(".date").empty();
                    $(".date").append(date);

                    //EMPTY AND FILL THE WEATHER
                    $(".weather").empty();
                    $(".weather").append(weather);

                    //EMPTY AND FILL THE TEMP
                    $(".temp").empty();
                    $(".temp").append(temp);

                    //EMPTY AND FILL THE ICON
                    $(".icon").empty();
                    $(".icon").attr('src', icon);
                    console.log(icon);
                });
            }
        });
    });
});
