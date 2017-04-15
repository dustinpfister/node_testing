

var dir = require('node-dir'),
galleryPath = '../../source/img/gallery_collections',

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

        console.log(collection);

        next();

    },

        // finished callback
        function (err, files) {

        if (err) {

            console.log(err);

        }

        done();

    });

};

// write markdown files for jimped images
exports.write = function (done) {

    buildDB(done);

};
