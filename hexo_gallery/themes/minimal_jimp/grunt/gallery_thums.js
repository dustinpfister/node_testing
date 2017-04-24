// process gallery thum images

var Jimp = require('jimp'),
fs = require('fs'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir'),
path = require('path');

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
makeThum = function (cName, done) {

    var file;

    // a cName must be given
    if (cName === undefined) {

        return;

    }

    done = done || function () {
        console.log('no callback given for makeThum');
    }

    fs.readdir(path.join(galleryPath, cName), function (err, data) {

        console.log(data.filter(function (fName) {

                console.log();
                console.log(!fName.match(/_jimped_/));
                console.log();

                return !fName.match(/_jimped_/) && fName !== 'thum.jpg';
            }));

    });

};

exports.runScript = function (options, done) {

    console.log('gallery_thums.');

    // get the collection names
    getCollectionFolders(galleryPath, function (cNames) {

        console.log(cNames);

        makeThum(cNames[0]);

        // get a file from each collection, and make it the thum.jpg for the collection

    });

};
