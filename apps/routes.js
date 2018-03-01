module.exports = function(app, posts) {
  app.get('/redditer/:search', async (req, res) => {
    var search = req.params.search;
    res.write('<h1>Posts from /r/space Containing: ' + search + '</h1>');

    //prints data from each post that corresponds with the search term
    for (i = 0; i < posts.length; i++) {
      var title = posts[i].data.title;
      if (title.toLowerCase().includes(search)) {
        var commentslink = 'https://www.reddit.com' + posts[i].data.permalink;
	res.write('<b>' + title + '</b><br>');
	res.write('Author: ' + posts[i].data.author + '<br>');
	res.write('Score: ' + posts[i].data.score + '<br>');
	res.write('<a href=' + commentslink + '>' + 
          posts[i].data.num_comments + ' Comments</a><br><br>');
      }
    }

    res.end();
  });
}
