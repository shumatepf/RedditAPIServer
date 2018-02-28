// server
const request = require('request');
const http = require ('http');

const url = 'https://www.reddit.com/r/space/top/.json';

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
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('test');
  res.end();
}).listen(8080);
