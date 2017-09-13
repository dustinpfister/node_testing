var _ = require('lodash');

var arr = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log(_.chunk(arr, 2));

var data = {

    w : 4,
    colors : ['black', 'white'],
    px : [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]

},

matrix = _.chunk(data.px, data.w);

matrix.forEach(function (line) {

    console.log(line);

});
