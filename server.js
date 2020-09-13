const express = require('express');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());
server.use('/api/projects', projectRouter);
server.use('/api/actions/', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Let's Do This Thing!<h1>`)
})

module.exports = server;
