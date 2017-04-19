

var fs = require('fs'),
Jimp = require('jimp'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir');

// process thum images
exports.runScript = function (options, done) {

    var index = 0,
    defaults = [

        ['width', 32],
        ['overwrite', false]

    ],
    i,
    currentColl = '';

    options = options || {};
    done = done || function () {};

    // set defaults if not set
    i = 0;
    while (i < defaults.length) {

        // if options is not given...
        if (options[defaults[i][0]] === undefined) {

            // set to the default
            options[defaults[i][0]] = defaults[i][1];

        }

        i += 1;
    }

    console.log(options);

    done();

    /*
    dir.readFiles(

    // path to read
    galleryPath,

    // options{
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

     */

};
