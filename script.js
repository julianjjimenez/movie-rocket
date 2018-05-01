// JavaScript File
$(document).ready(function() {
    
    
      
    
    $("#searchButton").click(function() {
  var searchMaterial =
    $("#searchInput").val();
        $.ajax({
            url: "https://www.omdbapi.com/?apikey=90d4b10a&s="+ searchMaterial +""   
        }).done(function(data) {
            console.log(data.Search.slice( 0, 20));
        });

    });
    

    
    
    
    
    
});
