var User = require('../models/user');

// Display list of all Authors
exports.user_list = function (req, res) {
    User.find({}, function (err, users) {
        if (err) throw err;

        res.render('users/index', {
            title: "Users List",
            users: users
        });
    });
};

exports.create = function (req, res) {
    res.render('users/add', {
        title: "Add User 2"
    });
};

exports.add = function (req, res) {
    var newUser = User({
        name: req.body.name,
        username: req.body.name,
        password: req.body.password,
        admin: true
    });

    // save the user
    newUser.save(function (err) {
        if (err) throw err;

        res.redirect('/users');
    });
};

exports.details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            res.send(err)
        }
        if (user) {
            res.render('users/details', {
                title: "User",
                user: user
            });
        }
        else {
            res.send("No user found with that ID")
        }
    });
};
