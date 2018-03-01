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
  json: true
}, async function(err, response, body) {
  if(err || response.statusCode != 200) {
    console.log(err);
  } else {
    posts = body.data.children;
    run();
  }
});

//runs the server. only called once the request is completed
function run() {
  require('./apps/routes.js')(app, posts);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
}
