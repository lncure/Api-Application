$(document).ready(function(){
    $("#newsButton").click(function(){

        $.ajax({
            type: "GET",
            url: "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-11&sortBy=publishedAt&apiKey=2f36de668b504d8aaabf89aad015cf1b",
            success: function(newsData) {
                console.log(newsData);

                var newsTitle = newsData.articles[0].title;
                var newsDesc = newsData.articles[0].description;
                var newsIcon = newsData.articles[0].urlToImage;
                var newsPublished = newsData.articles[0].publishedAt;

                $(".newsTitle").append(newsTitle);
                $(".newsDesc").append(newsDesc);
                $(".newsIcon").attr('src', newsIcon);
                $(".newsPublished").append(newsPublished);
            }
        });
    });
});