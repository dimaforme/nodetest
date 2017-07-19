const express = require('express');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
const app = express();

var router = express.Router();

app.set('view engine', 'ejs');

// Require controller modules
var users_controller = require(__dirname +'/controllers/users.controller');

mongoose.connect('mongodb://localhost/myappdatabase');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(3000, function () {
    console.log('listening on 3000')
})

router.get('/users', users_controller.user_list);
router.get('/users/create', users_controller.create);
router.post('/users/create', users_controller.add);
router.get('/users/:id', users_controller.details);

app.use('/', router);