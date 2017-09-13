var _ = require('lodash'),
chalk = require('chalk');

// basic example
var arr = ['one', 'two', 'three', 'four', 'five', 'six'];

console.log(_.chunk(arr, 2));
// [ [ 'one', 'two' ], [ 'three', 'four' ], [ 'five', 'six' ] ]

// matrix data example
var data = {
 
    w : 4,
    colors : ['white', 'blue'],
    px : [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
 
    // my toMatrix method using _.chunk
    toMatrix : function(){
 
        return _.chunk(this.px,this.w);
 
    }
 
};

// draw it out like this
data.toMatrix().forEach(function (line) {

    var txt = '';
    line.forEach(function (px) {

        var style = chalk[data.colors[px]];

        txt += style(px);

    });

    console.log(txt);

});
