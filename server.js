var port = 9000
var express = require('express')
var request = require('request')
var app = express()
 
app.get('/top-users', function (req, res) {
  request('http://tweet-collector:8080/tweets/top-users', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	res.end(response.body)
	  } else {
	  	console.error(err.stack);
  		res.status(500).send('Internal error');
	  }
	})
})

app.get('/tweet-count-by-hashtag-and-language', function (req, res) {
  request('http://tweet-collector:8080/tweets/tweet-count-by-hashtag-and-language', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	res.end(response.body)
	  } else {
	  	console.error(err.stack);
  		res.status(500).send('Internal error');
	  }
	})
})

app.get('/tweet-count-by-hour', function (req, res) {
  request('http://tweet-collector:8080/tweets/tweet-count-by-hour', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	res.end(response.body)
	  } else {
	  	console.error(err.stack);
  		res.status(500).send('Internal error');
	  }
	})
})
 
app.listen(port)
console.log("Tweets-api application started on port " + port)