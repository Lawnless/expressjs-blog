const express = require('express');
const chalk = require('chalk');
const app = express();
const path = require('path');
const port = 3000;

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
    console.log(chalk.green('[Bilgi] ') + `Site 'http://localhost:${port}' üzerinde aktif edildi.`);
});