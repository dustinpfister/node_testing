

var fs = require('fs'),
Jimp = require('jimp'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir');

// process thum images
exports.process = function (done) {

    dir.readFiles(

        // path to read
        galleryPath,

        // options
    {
        match : /\.jpg$|\.png$/,
        //matchDir:/./,
        exclude : /_jimped_/
    },

        // content call back
        function (err, content, filename, next) {

        Jimp.read(filename, function (err, img) {

            console.log('reading file: ' + filename);

            img.scaleToFit(32, Jimp.AUTO, Jimp.RESIZE_BEZIER)
            .quality(30)
            .write(filename.replace(/\.jpg$|\.png$/, '') + '_jimped_32.jpg', function () {

                next();

            });

        });

    },

        // finished callback
        function (err, files) {

        if (err) {

            console.log(err);

        }

        done();

    });

};
