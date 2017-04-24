
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
                return !!fName.match(/_jimped_64/) && fName !== 'thum.jpg';
            }));

    });

};

// for all images
exports.forAll = function (options, method) {

    console.log('yes for all is getting called');

    options = options || {};
    options.cName = options.cName || '';

    dir.readFiles(

        path.join(sourcePath, options.cName),
        {

        match : /.jpg$/

    },

        function (err, content, filename, next) {

        console.log(filename);

        next();

    },

        function (err, files) {

        console.log('done');

    });

};
