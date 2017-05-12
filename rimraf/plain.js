var fs = require('fs'),
path = require('path');

var readDir = function (dir) {

    fs.readdir(dir, function (one, two) {

        console.log(two[1]);

        console.log(fs.lstatSync(path.join(dir, '/' + two[1])).isDirectory());

    });

};

readDir('./source');
