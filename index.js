const express = require('express');
const server = express();
const config = require('./config/config.json');

server.use('/', require('./modules/pages.js'));
server.use('/data/', require('./modules/data.js'));

server.set('view engine', 'hbs');
server.use(express.static('public'))

server.listen(config.PORT, () => {
    console.log('Server running on port: ' + config.PORT);
});

process.on('uncaughtException', (err) => {
    console.log(err);
})