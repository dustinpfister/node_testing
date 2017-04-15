var fs = require('fs'),
linkPath = '/gallery',
markdownPath = '../../source/gallery';

exports.runScript = function (done) {

    console.log('building index.');

    fs.readdir(markdownPath, function (err, files) {

        //console.log(files);

        files.forEach(function (filename) {

            if (filename != 'index.md') {

                console.log(linkPath + '/' + filename.replace(/\.md$/, '') + '.html');

            }

        });

        done();

    });

};
