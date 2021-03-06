const express = require('express');
const path = require('path');
const chalk = require('chalk');
const loadNet = require('../brain/loadNet');
const resetNet = require('../brain/resetNet');

const PUBLIC_PATH = path.join(__dirname, '../../build');
const PORT = process.env.PORT || 3000;

const apiRouter = require('./api');

const server = express();

let neuralNet = loadNet();

server.use(express.static(PUBLIC_PATH));
server.use(express.json());

server.use('/api/model/load', (req, res, next) => {
    if (Object.keys(req.body.model).length) {
        neuralNet = resetNet();
        neuralNet.fromJSON(req.body.model);
    }
    next();
});

server.use('/api/model/reset', (req, res, next) => {
    neuralNet = resetNet();
    next();
})

server.use('/api', (req, res, next) => {
    req.net = neuralNet;
    next();
});

server.use('/api', apiRouter);

server.get('*', function (req, res) {
    res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

server.listen(PORT, () => {
    console.log(chalk.blueBright(`Express server listening on ${PORT}`));
});