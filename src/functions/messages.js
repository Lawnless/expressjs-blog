const chalk = require('chalk');

module.exports = {
    success: function(msg) {
        return console.log(chalk.green('[Başarılı]')+' '+msg);
    },
    info: function(msg) {
        return console.log(chalk.blue('[Bilgi]')+' '+msg);
    },
    warning: function(msg) {
        return console.log(chalk.yellow('[Uyarı]')+' '+msg);
    },
    error: function(msg) {
        return console.log(chalk.red('[Hata]')+' '+msg);
    }
};