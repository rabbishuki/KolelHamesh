var express      = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Admin = 'Admin';
var User = 'User';

var Users = {
  userList : {
    'Shuki': {username : 'Shuki',
     password : '1234',
     permission : Admin},
     'Itamar': {username : 'Itamar',
     password : 'qwe123',
     permission : User}
  },
}
app.use(express.static('dist'));
app.use('/javascripts', express.static(__dirname + '/dist/js'));
app.use('/images', express.static(__dirname + '/dist/img'));
app.use('/lib', express.static(__dirname + '/dist/lib'));
app.use('/templates', express.static(__dirname + '/dist/templates'));
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
  console.log('enter');
  res.sendFile(__dirname + "/dist/enter.html");
});

app.post('/login', requireRole([Admin,User]), function(req, res){
    res.send({username : req.body.username, permission : Users.userList[req.body.username].permission});
    
  }
);
app.get('/' + Admin, requireRole([Admin]), function(req, res){
  console.log(Admin);
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/' + User, requireRole([User]), function(req, res){
  console.log(User);
  res.sendFile(__dirname + '/dist/index.html');
});


var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + " right now");
});