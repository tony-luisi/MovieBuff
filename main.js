var request = require('superagent')


$(document).ready(function() {

  //Tells jquery to wait until dom has loaded before loading jquery
  var inputData = $("#button").click(function() {

    var rawInput = $("#searchInput").val().toString();
    getMovieByActor(rawInput, function(err, data){

      var movies = data.body.results[0].known_for
      renderMovieResults(movies)

    })
  })
})

function renderMovieResults(movies) {
  console.log(document)
  document.getElementById('results').innerHTML = ""


  for (var i = 0; i < movies.length; i++) {

    console.log(movies[i].title)
    $("#results").append("<div class='posters animated rollIn'><h3> " + movies[i].title + "</h3><br>" + "<img src='https://image.tmdb.org/t/p/w185/" + movies[i].poster_path +"'> <br></div>")

  }


}

function getMovieByActor(name, callback){

  name = escape(name)
  console.log(name)
  request.get("http://api.themoviedb.org/3/search/person?api_key=da40aaeca884d8c9a9a4c088917c474c&query=" + name)
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (err) {
        callback(err)
        return
      }
      callback(null, res)
    })

}



  document.addEventListener('DOMContentLoaded', function() {


})

