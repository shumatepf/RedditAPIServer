//parse json
module.exports = function(request, url) {
  console.log('request is going to happen');
  request({
    url: url,
    json: true
  }, function(err, response, body) {
    if(err || response.statusCode != 200) {
      console.log(err);
    } else {
      console.log('finished');
      return body.data.children;
    }
  });
}
