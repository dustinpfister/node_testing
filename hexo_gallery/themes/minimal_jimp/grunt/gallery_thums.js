// process gallery thum images

var Jimp = require('jimp'),
fs = require('fs'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir'),
path = require('path');

// get a list of collection names
getCollectionFolders = function (cPath, done) {

    cPath = cPath || './';
    done = done || function (folders) {

        console.log('no callback given');
        console.log(folders);

    };

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

},

// make a thum for the given collection name
getSourceFiles = function (cName, done) {

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {
        console.log('no callback given for getSourceFiles');
    }

    fs.readdir(path.join(galleryPath, cName), function (err, data) {

        done(data.filter(function (fName) {
                return !fName.match(/_jimped_/) && fName !== 'thum.jpg';
            }));

    });

},

// make a thum for the given collection name
getJimpedFiles = function (cName, done) {

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {
        console.log('no callback given for getSourceFiles');
    }

    fs.readdir(path.join(galleryPath, cName), function (err, data) {

        done(data.filter(function (fName) {
                return !!fName.match(/_jimped_64/) && fName !== 'thum.jpg';
            }));

    });

},

// make a thum for the given collection name
makeThum = function (cName, done) {

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {
        console.log('no callback given for makeThum');
    }

    console.log(cName);
    getSourceFiles(cName, function (files) {

        console.log('the source files:');
        console.log();

        Jimp.read(path.join(galleryPath, cName, files[0]), function (err, img) {

            console.log(img);

            img.scaleToFit(320, Jimp.AUTO, Jimp.RESIZE_BEZIER)
            .quality(30)
            .write(
                path.join(galleryPath, cName, 'thum.jpg'),
                function () {

                console.log('made a thum image for collection : ' + cName);

                done();

            });

        });

    });

};

exports.runScript = function (options, done) {

    console.log('gallery_thums.');

    // get the collection names
    getCollectionFolders(galleryPath, function (cNames) {

        console.log(cNames);

        makeThum(cNames[1]);

        // get a file from each collection, and make it the thum.jpg for the collection

    });

};
