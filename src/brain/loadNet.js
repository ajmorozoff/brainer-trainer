const brain = require('brain.js');
const fs = require('fs');

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
}

const loadNet = () => {
    const net = new brain.NeuralNetwork(config);

    const rawNet = fs.readFileSync('net.json', 'utf8');
    if (rawNet) {
        const parsedNet = JSON.parse(rawNet);
        net.fromJSON(parsedNet);
    } 

    return net;
}

module.exports = loadNet;


