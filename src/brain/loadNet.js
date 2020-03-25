const brain = require('brain.js');
const fs = require('fs');

const loadNet = () => {
    const net = new brain.NeuralNetwork();

    const rawNet = fs.readFileSync('net.json', 'utf8');
    if (rawNet) {
        const parsedNet = JSON.parse(rawNet);
        net.fromJSON(parsedNet);
    } 

    return net;
}

module.exports = loadNet;


