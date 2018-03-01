module.exports = function(app, posts) {
  app.get('/redditer/:search', (req, res) => {
    console.log('get is running');
    //var posts = await require('./apps/parsejson.js')(request, url);
    var search = req.params.search;
    res.write('<h1>Posts from /r/space Containing: ' + search + '</h1>');
    for (i = 0; i < posts.length; i++) {
      var title = posts[i].data.title;
      var author = posts[i].data.author;
      var score = posts[i].data.score;
      var numcomments = posts[i].data.num_comments;
      var commentslink = 'https://www.reddit.com' + posts[i].data.permalink;
      if (title.toLowerCase().includes(search)){
	res.write('<b>' + title + '</b><br>');
	res.write('Author: ' + author + '<br>');
	res.write('Score: ' + score + '<br>');
	res.write('<a href=' + commentslink + '>' +  numcomments + ' Comments</a><br><br>');
      }
    }
    res.write(search);
    res.end();
  });
}
