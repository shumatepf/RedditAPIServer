module.exports = function(app) {
  app.get('/redditer/:search', (req, res) => {
    var search = req.params.search;
    res.send(search);
  });
}
