const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err);

    const database_r = database.db("users");
    require('./app/routes')(app, database_r);

    app.listen(port, () => {
        console.log('Server is live on ' + port);
    });
})



