// JavaScript File
$(document).ready(function() {
    
    
      
    
    $("#searchButton").click(function() {
  var searchMaterial =
    $("#searchInput").val();
        $.ajax({
            url: "https://www.omdbapi.com/?apikey=90d4b10a&s="+ searchMaterial +""   
        }).done(function(data) {
        $("#title").empty();
        if (data.Error) {
           $("#title").append("<p>"+ data.Error +"</p>");
           return; 
        }
console.log(data)
          var results = data.Search.slice(0 , 20);
            for ( var i=0; i<results.length; i=i+1) {
		$("#title").append("<p>"+ results[i].Title +"</p>");
		$("#year").append("<p>"+ results[i].Year +"</p>");
		$("#poster").append("<img src=" + results.Poster + ">");
	} 
        });

    });
    
    
  
    
   
    
});
