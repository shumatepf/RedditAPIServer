//get function. prints out the information from the posts that were pulled using request
module.exports = function(app, posts) {
  app.get('/redditer/:search', (req, res) => {
    var search = req.params.search;
    res.write('<h1>Posts from /r/space Containing: ' + search + '</h1><hr>');

    //prints data from each post that corresponds with the search term
    for (i = 0; i < posts.length; i++) {
      var title = posts[i].data.title;
      if (title.toLowerCase().includes(search)) {
	res.write('<b>' + title + '</b><br>');
        res.write('<i>Author:</i> ' + posts[i].data.author + '<br>');
        res.write('<i>Score:</i> ' + posts[i].data.score + '<br>');
        res.write('<a href=' + posts[i].data.url+ '>' +
          posts[i].data.num_comments + ' Comments</a><br><br><hr>');
      }
    }

    res.end();
  });
}
