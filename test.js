var test = require("tape")
var main = require("./main.js")

test('search movie actor', function (t) {

  //TEST 1 - search for movie using blank string
  var name = ""
  main.getMoviesByActor(name, function(err, actualValue) {
    t.notOk(actualValue, "empty string returns an empty string")
  })


  var name = "Patrick Stewart"
  main.getMoviesByActor(name, function(err, actualValue) {
    //TEST 2 - search for a movie using the actors name, data exists
    t.ok(actualValue, "non empty string returns ok")

    //TEST 3 - search for a movie using the actors name, has a results object
    t.ok(actualValue.results, "actor string has a results object")

    //TEST 4 - search for a movie using the actors name, has a known for object for the first element
    t.ok(actualValue.result[0].known_for, "actor string has a known for the first object")

    //TEST 5 - search for a movie using the actors name, has a title
    t.ok(actualValue.result[0].known_for[0].title, "actor string has a known for the first object")
  })


});
