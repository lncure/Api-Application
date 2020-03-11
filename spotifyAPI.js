$(document).ready(function(){
    $.ajax({

        type: "GET",
        url: "https://api.spotify.com/v1/users/1131366962/playlists",
        success: function(playlist) {

            console.log(playlist);

        }
    });
});
