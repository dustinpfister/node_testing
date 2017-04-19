

var fs = require('fs'),
Jimp = require('jimp'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir');

// process thum images
exports.runScript = function (options, done) {

    var index = 0,
    currentColl = '';

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

            var ns = filename.split('\\'),
            collName = ns[ns.length - 2];

            console.log('reading file # ' + index + ' : ' + filename);
            console.log('collection name: ' + collName);

            // make a thum for the collection
            if (currentColl != collName) {

                currentColl = collName;
                console.log('Collection Change, making thum:');
                //console.log(ns.shift().join('//'));

                img.scaleToFit(64, Jimp.AUTO, Jimp.RESIZE_BEZIER)
                .quality(30)
                .write(
                    ns.slice(0, ns.length - 2).join('//') + '/' + collName + '/thum.jpg',
                    function () {

                    console.log('made a thum image for collection : ' + collName);

                });

            }
            console.log('');

            /*
            img.scaleToFit(64, Jimp.AUTO, Jimp.RESIZE_BEZIER)
            .quality(30)
            .write(filename.replace(/\.jpg$|\.png$/, '') + '_jimped_64.jpg', function () {

            next();

            });
             */

            index += 1;

            next();

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
