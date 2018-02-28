// server
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const url = 'https://www.reddit.com/r/space/.json';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080;
var posts = [];

request({
  url: url,
  json: true
}, function(err, response, body) {
  if(err || response.statusCode != 200) {
    console.log(err);
  } else {
    posts = body.data.children;
    console.log(posts.length);
    for(i = 0; i < posts.length; i++) {
      console.log(posts[i].data.title);
    }
  }
});

console.log(posts.length);

for(i = 0; i < posts.length; i++) {
  console.log(posts[i]);
}

//var data = require('./apps/routes.js')(request, url);
console.log('abc');

require('./apps/routes.js')(app);
app.listen(port, () => {
  console.log('We are live on ' + port);
});
