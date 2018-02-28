// server
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const url = 'https://www.reddit.com/r/space/.json';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080;
var posts = [];

//run();

console.log('request is going to happen');

request({
  url: url,
  json: true
}, function(err, response, body) {
  if(err || response.statusCode != 200) {
    console.log(err);
  } else {
    console.log('finished');
    posts = body.data.children;
    run();
  }
});

function run() {
  //console.log('require is going to be invoked');
  //let posts = require('./apps/parsejson.js')(request, url);
  console.log('finished should be above this');
  require('./apps/routes.js')(app, posts);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
}

function callback(){
  console.log('finished');
}
