var movies = [{"title": "Scream", "Rating": 5, "hasWatched": "true"}, {"title" : " Hannibal", "Rating" : 3, "hasWatched": "true"}, 
{"title" :" Training Day", "Rating" : 4, "hasWatched": "false"}, {"title": " Monster's Ball", "Rating" : 3, "hasWatched": "true"}, {"title" : " Black Panther", "Rating" : 5, "hasWatched" : "false"}];

for( var i = 0; i<movies.length; i++){
	if(movies[i].hasWatched === "true"){
		console.log("You have watched " + movies[i].title + "-" + movies[i].Rating + " stars" );
	}
	else{
		console.log("You have not seen " + movies[i].title + "-" + movies[i].Rating + " stars");
	}
}
