const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { info, warning, error } = require('./src/functions/messages.js');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/pages/contact.html'));
});

app.listen(port, () => {
    info(`Site 'http://localhost:${port}' üzerinde aktif edildi.`);
});