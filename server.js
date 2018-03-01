// server
const request = require('request');
const express = require('express');

const url = 'https://www.reddit.com/r/space/.json';

const app = express();

const port = 8080;
var posts = [];

//pulls out the post information from the reddit json object
request({
  url: url,
  json: true }, function(err, response, body) {
  if(err || response.statusCode != 200) {
    console.log(err);
  } else {
    posts = body.data.children;
    run();
  }
});

function run(){
  app.listen(port, () => {
    require('./apps/routes.js')(app, posts);
    console.log('We are live on ' + port);
  });
}
