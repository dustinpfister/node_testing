let chalk = require('chalk');

// support of color level 2 by default in cmd.exe in windows 10
console.log(chalk.level); // 2
console.log(chalk.rgb(255,125,64)._styles[0]);
// { open: '\u001b[38;5;209m',
//  close: '\u001b[39m',
//  closeRe: /[39m/g }

// force level 3
chalk.level = 3;
console.log(chalk.rgb(255,125,64)._styles[0]);
// { open: '\u001b[38;2;255;125;64m',
//  close: '\u001b[39m',
//  closeRe: /[39m/g }