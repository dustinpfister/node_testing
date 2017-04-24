
var fs = require('fs'),
Jimp = require('jimp'),
dir = require('node-dir'),
path = require('path'),
sourcePath = '../../../source/img/gallery_collections';

// get a list of collection names
exports.getCollectionFolders = function (cPath, done) {

    cPath = cPath || './';
    done = done || function (folders) {

        console.log('no callback given');
        console.log(folders);

    };

    console.log('gallery_api: getting collection names...');

    fs.readdir(cPath, function (err, contents) {

        var folders = [];

        if (err) {

            console.log('err');

        } else {

            contents.forEach(function (file, index) {

                var filePath = path.join(cPath, file);

                fs.stat(filePath, function (err, data) {

                    if (err) {

                        console.log(err);

                    } else {

                        if (data.isDirectory()) {

                            folders.push(file);

                        }

                    }

                    // call done callback only when we get to the last index
                    if (index === contents.length - 1) {

                        done(folders);

                    }

                });

            });

        }

    });

};

// get the source files for the given collection name
exports.getSourceFiles = function (cName, done) {

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {

        console.log('no callback given for getSourceFiles');

    }

    fs.readdir(path.join(sourcePath, cName), function (err, data) {

        done(data.filter(function (fName) {
                return !fName.match(/_jimped_/) && fName !== 'thum.jpg';
            }));

    });

};

// get the jimped files for the given collection name
exports.getJimpedFiles = function (cName, done) {

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {
        console.log('no callback given for getSourceFiles');
    }

    fs.readdir(path.join(sourcePath, cName), function (err, data) {

        done(data.filter(function (fName) {
                return !!fName.match(/_jimped_/) && fName !== 'thum.jpg';
            }));

    });

};

// process source images
exports.processSource = function (options) {

    var fileEnd = /.jpg$|.png$|.JPG$|.PNG$/;

    options = options || {};
    options.cName = options.cName || '';
    options.width = options.width || 32;
    //options.match = options.match || /.jpg$|.png$|.JPG$|.PNG$/;

    dir.readFiles(

        path.join(sourcePath, options.cName), {

        match : fileEnd, // jpg or png files
        exclude : /_jimped_|thum.jpg/// exclude images that are not source

    },

        function (err, content, filename, next) {

        // the jimped filename
        var jimpedFN = filename.replace(fileEnd, '_jimped_' + options.width + '.jpg');

        console.log(jimpedFN);

        // check if it is there
        Jimp.read(jimpedFN, function (err, img) {

            if (err) {

                console.log('jimp not found');

            } else {

                console.log('jimp found.');

            }

            next();

        });

    },

        function (err, files) {

        console.log('done');

    });

};

// ALPHA: for all images
exports.forAll = function (options, method) {

    console.log('yes for all is getting called');

    options = options || {};
    options.cName = options.cName || '';

    dir.readFiles(

        path.join(sourcePath, options.cName), {

        match : /.jpg$/,
        exclude : /_jimped_/

    },

        function (err, content, filename, next) {

        console.log(filename);

        next();

    },

        function (err, files) {

        console.log('done');

    });

};
