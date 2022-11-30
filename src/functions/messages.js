const chalk = require('chalk');

module.exports = {
    info: function(msg) {
        return console.log(chalk.green('[Bilgi]')+' '+msg);
    },
    warning: function(msg) {
        return console.log(chalk.yellow('[Uyarı]')+' '+msg);
    },
    error: function(msg) {
        return console.log(chalk.red('[Hata]')+' '+msg);
    }
};