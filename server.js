var express      = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Users = {
  userList : {
    'Shuki': {username : 'Shuki',
     password : '1234',
     permission : 'Admin'},
     'Itamar': {username : 'Itamar',
     password : 'qwe123',
     permission : 'User'}
  },
}
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

function requireRole(role) {
    return function(req, res, next) {
      var a = false;
        for (i in role){
          if((req.body.username || req.cookies.username) &&
             ((Users.userList[req.body.username] || req.cookies).permission === role[i])) {
            next();
            a = true;
          }
        }
        if(!a)
            res.send(403);
    }
}

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
  res.sendFile(__dirname + "/dist/enter.html");
});

app.post('/path', requireRole(['Admin','User']), function(req, res){
    res.sendFile(__dirname + "/dist/index.html");
  }
);
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});