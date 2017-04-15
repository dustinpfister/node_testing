var fs = require('fs'),
markdownPath = '../../source/gallery';

exports.runScript = function (done) {

    console.log('building index.');

    fs.readdir(markdownPath, function (err, files) {

        //console.log(files);

        files.forEach(function (filename) {

            console.log(filename);

        });

        done();

    });

};
