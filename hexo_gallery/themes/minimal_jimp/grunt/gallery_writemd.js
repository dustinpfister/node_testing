

var dir = require('node-dir'),
galleryPath = '../../source/img/gallery_collections',

options = {

    perPage : 2

},

db = {};

// build a database of files to make markdown files for
var buildDB = function (done) {

    db = {};

    dir.readFiles(

        // path to read
        galleryPath,

        // options
    {
        match : /_jimped_32\.jpg$|\.png$/,
        //matchDir:/./,
        //exclude : /_jimped_/
    },

        // content call back
        function (err, content, filename, next) {

        var ns = filename.split('\\'),
        collection = ns[ns.length - 2];

        console.log(filename);

        if (db[collection] === undefined) {
            db[collection] = [];
        }

        db[collection].push({

            path : filename,
            filename : ns[ns.length - 1].replace(/\.jpg$|\.png$/, '')

        });

        next();

    },

        // finished callback
        function (err, files) {

        if (err) {

            console.log(err);

        }

        //console.log(db);

        done();

    });

},

writeMD = function (done) {

    console.log('building database...');
    buildDB(function () {

        console.log('database done.');

        done();

    });

};

// write markdown files for jimped images
exports.write = function (done) {

    writeMD(done)

};
