var express = require('express');
var app = express();

var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// Require controller modules
var users_controller = require(__dirname +'/controllers/users.controller');

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


router.get('/users/create', users_controller.create);
app.use('/', router);