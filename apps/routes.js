module.exports = function(request, url) {
  request({
    url: url,
    json: true
  }, function(err, response, body) {
    if (err) return null;
    console.log(body);
  });
}
