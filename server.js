// server
const request = require('request');
const express = require('express');

const url = 'https://www.reddit.com/r/space/.json';

const app = express();

const port = 8080;
var posts = [];

//pulls out the post information from the reddit json object
var parse = function (){
  request({
    url: url,
    json: true
  }, function(err, response, body) {
    if(err || response.statusCode != 200) {
      console.log(err);
    } else {
      console.log('parse');
      posts = body.data.children;
      require('./apps/routes.js')(app, posts);
    }
  });
};

app.listen(port, () => {
  parse();
  console.log('We are live on ' + port);
});
