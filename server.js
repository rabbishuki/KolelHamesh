var app = require('express')();
app.use(require('express').static('dist'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});