module.exports = function (grunt) {

    var fs = require('fs'),
    galleryPath = '../../source/img/gallery_collections';

    // Default task just lists what is in the galleryPath
    grunt.registerTask('default', function () {

        console.log('minimal_jimp default grunt task:');

        done = this.async();

        console.log('listing gallery collection:');
        fs.readdir(galleryPath, function (err, data) {

            console.log(data);

            done();

        });

    });

    var process = (function () {

        var filePat = /\.jpg$|\.png$/,
        fileNames = [],
        index = 0,
        sourceDir = './';

        var api = function () {};

        // get a list of fileNames
        api.getFileNames = function (path, done) {

            fileNames = [];

            done = done || function () {};

            sourceDir = path;

            fs.readdir(sourceDir, function (err, data) {

                if (err) {

                    console.log('Error');
                    console.log(err);

                } else {

                    data.forEach(function (fn) {

                        if (fn.match(filePat)) {

                            fileNames.push(fn);

                        }

                    });

                    done(fileNames);

                }

            });

        };

        return api;

    }
        ());

    grunt.registerTask('process', function () {

        console.log('minimal_jimp process:');

        done = this.async();

        fs.readdir(galleryPath, function (err, data) {

            console.log('geting list');

            console.log(data);

            process.getFileNames(galleryPath+'/'+data[0], function (names) {

                console.log(names);

                done();

            });

        });

    });

};
