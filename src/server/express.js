const express = require('express');
const path = require('path');
const chalk = require('chalk')

const PUBLIC_PATH = path.join(__dirname, '../../build');
const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.static(PUBLIC_PATH));


server.get('*', function (req, res) {
    res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

server.listen(PORT, () => {
    console.log(chalk.blueBright(`Express server listening on ${PORT}`));
})