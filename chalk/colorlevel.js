var chalk = require('chalk');

var ctx = new chalk.constructor();

//chalk.level = 0;

var r = 255;
while(r > 0){

    console.log(chalk.rgb(r,0,0)(ctx.level));
    r -= 5;

}