const uuidv1 = require('uuid/v1');
const express = require('express');
const app = express();

app.get('/api/dynamic', (req,res) => {
    let dynamicController = require('./controllers/runtimeController');
    routeName = uuidv1();
    dynamicController.init(app, routeName);
    res.status(200).send(routeName);
});

app.listen(3000);
