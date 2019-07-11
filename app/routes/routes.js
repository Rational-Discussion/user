var ObjectID = require('mongodb').ObjectID;
var handler = require('./handlers');
//import * as han from './handlers.js';

module.exports = function(app, db) {
    // Read
    app.get('/user/:id', handler.getUser);

    // Post
    app.post('/user/create', handler.createUser);

    // Delete
    app.delete('/user/delete/:id', handler.deleteUser);

    //Update
    app.put('/user/edit/:id', handler.updateUser);
};
