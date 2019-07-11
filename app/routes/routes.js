var ObjectID = require('mongodb').ObjectID;
var handler = require('./handlers.js');

module.exports = function(app, db) {
    // Read
    app.get('/user/:id', handler.getUser(req, res));

    // Post
    app.post('/user/create', handler.createUser(req, res));

    // Delete
    app.delete('/user/delete/:id', handler.deleteUser(req, res));

    //Update
    app.put('/user/edit/:id', handler.updateUser(req, res));
};
