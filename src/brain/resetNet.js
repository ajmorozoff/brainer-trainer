const brain = require('brain.js');
const config = require('./config');

function resetNet() {
    const net = new brain.NeuralNetwork(config);
    return net;
}

module.exports = resetNet;
