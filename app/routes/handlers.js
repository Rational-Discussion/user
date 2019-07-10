module.exports = {
    getUser : function getUser(req, res) {
        const id = req.params.id;
        const details = {'_id' : new ObjectID(id)  };
        db.collection('users').findOne(details, (err, item) => {
            if(err) {
                res.send({'error' : 'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    },

    createUser: function createUser(req, res) {
        const user = { name: req.body.name, password: req.body.password };
        db.collection('users').insert(user, (err, result) => {
            if(err) {
                res.send({ 'error' : 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
    },

    deleteUser : function deleteUser(req, res) {
        const id = req.params.id;
        const details = { '_id' : new ObjectID(id) };
        db.collection('users').remove(details, (err, item) => {
            if(err) {
                res.send({'error' : 'An error has occurred'});
            } else {
                res.send('Note ' + id + 'deleted!');
            }
        });
    },

    updateUser : function updateUser(req, res) {
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
}