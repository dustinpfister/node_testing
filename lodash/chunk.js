var _ = require('lodash'),
chalk = require('chalk');

// basic example
var arr = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log(_.chunk(arr, 2));


// matrix data example
var data = {

    w : 4,
    colors : ['white', 'blue'],
    px : [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]

},
matrix = _.chunk(data.px, data.w);

// draw it out like this
matrix.forEach(function (line) {

    var txt = '';
    line.forEach(function (px) {

        var style = chalk[data.colors[px]];

        txt += style(px);

    });

    console.log(txt);

});
