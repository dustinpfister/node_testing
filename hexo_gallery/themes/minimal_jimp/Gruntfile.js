module.exports = function (grunt) {

    var fs = require('fs'),
    Jimp = require('jimp'),
    galleryPath = '../../source/img/gallery_collections',
    targetPath = '../../source/img/gallery_thumb';

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
        len = 0,
        sourceDir = './source',
        targetDir = './target',

        api = function () {};

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

                    len = fileNames.length;
                    done(fileNames);

                }

            });

        };

        api.processNext = function (done) {

            console.log('');
            console.log('processing image ' + index + '/' + len);
            console.log('imageName = ' + fileNames[index]);

            Jimp.read(sourceDir + '/' + fileNames[index], function (err, img) {

                console.log('Jimp read okay');

                console.log(img);

                done();

                /*
                img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
                .quality(quality)
                .write(targetDir + fileName + 'sized_' + size + '.jpg'); // save
                 */
            });

        };

        return api;

    }
        ());

    grunt.registerTask('process', function () {

        console.log('minimal_jimp process:');

        taskDone = this.async();

        fs.readdir(galleryPath, function (err, data) {

            console.log('geting list');

            console.log(data);

            process.getFileNames(galleryPath + '/' + data[0], function (names) {

                console.log(names);

                process.processNext(function () {

                    console.log('process is done');
                    taskDone();

                });

            });

        });

    });

};
