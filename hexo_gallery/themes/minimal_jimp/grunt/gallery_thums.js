// process gallery thum images

var Jimp = require('jimp'),
fs = require('fs'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir'),
path = require('path'),
gallery = require('./gallery_api.js');

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
    gallery.getSourceFiles(cName, function (files) {

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
    gallery.getCollectionFolders(galleryPath, function (cNames) {

        console.log(cNames);

        makeThum(cNames[1]);

        // get a file from each collection, and make it the thum.jpg for the collection

    });

};
