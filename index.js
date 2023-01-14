const express = require('express');
const server = express();
const config = require('./config/config.json');
const port = 58750;

server.use('/', require('./modules/pages.js'));
server.use('/data/', require('./modules/data.js'));

server.set('view engine', 'hbs');
server.use(express.static('public'))

server.listen(port, () => {
    console.log('Server running on port: ' + port);
});

process.on('uncaughtException', (err) => {
    console.log(err);
})
