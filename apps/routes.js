module.exports = function(app, posts) {
  app.get('/redditer/:search', (req, res) => {
    console.log('get is running');
    //var posts = await require('./apps/parsejson.js')(request, url);
    var search = req.params.search;
    for (i = 0; i < posts.length; i++) {
      var str = '' + posts[i].data.title;
      if (str.toLowerCase().includes(search)){
	res.write(str + '\n');
      }
    }
    res.write(search);
    res.end();
  });
}
