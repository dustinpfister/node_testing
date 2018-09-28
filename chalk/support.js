var chalk = require('chalk');

if (chalk.supportsColor) {

    console.log(chalk.blue('yes your terminal supports color, this text should be blue.'));

} else {

    console.log('sorry the terminal does not support color.');

}

// the color level (0 - 3)
console.log('color level: ' + chalk.level);
