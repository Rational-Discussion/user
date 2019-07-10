var ObjectID = require('mongodb').ObjectID;
var handler = require('./handlers.js');

module.exports = function(app, db) {
    // Read
    app.get('/user/:id', getUser(req, res));

    // Post
    app.post('/user/create', createUser(req, res));

    // Delete
    app.delete('/user/delete/:id', deleteUser(req, res));

    //Update
    app.put('/user/edit/:id', updateUser(req, res));
};

function getUser(req, res) {
    const id = req.params.id;
    const details = {'_id' : new ObjectID(id)  };
    db.collection('users').findOne(details, (err, item) => {
        if(err) {
            res.send({'error' : 'An error has occurred'});
        } else {
            res.send(item);
        }
    });
}

function createUser(req, res) {
    const user = { name: req.body.name, password: req.body.password };
    db.collection('users').insert(user, (err, result) => {
        if(err) {
            res.send({ 'error' : 'An error has occurred'});
        } else {
            res.send(result.ops[0]);
        }
    });
}

function deleteUser(req, res) {
    const id = req.params.id;
    const details = { '_id' : new ObjectID(id) };
    db.collection('users').remove(details, (err, item) => {
        if(err) {
            res.send({'error' : 'An error has occurred'});
        } else {
            res.send('Note ' + id + 'deleted!');
        }
    });
}

function updateUser(req, res) {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    const user = { name: req.body.name, password: req.body.password };
    db.collection('users').update(details, user, (err, result) => {
        if(err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(user);
        }
    });
}