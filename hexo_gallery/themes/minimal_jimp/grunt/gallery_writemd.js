

var dir = require('node-dir'),
galleryPath = '../../source/img/gallery_collections',

options = {

    perPage : 2

},

db = {},

// break an array down into an array of arrays
breakToPages = function (files, perPage) {

    var pages = [],
    i = 0;

    perPage = perPage || 4;
    while (i < files.length) {

        pages.push(files.slice(i, i + perPage));

        i += perPage;

    }

    return pages;

},

// build a database of files to make markdown files for
buildDB = function (done) {

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

        done();

    });

},

writeMD = function (done) {

    var collIndex = 0,
    collections = [],
    collName = '',
    pageIndex = 0,
    imageIndex = 0;

    console.log('building database...');
    buildDB(function () {

        console.log('database done.');
        console.log('breaking down into pages...');

        for (var collection in db) {

            db[collection] = breakToPages(db[collection], options.perPage);

        }
        console.log('database broken to pages.');

        collections = Object.keys(db);

        collIndex = 0;
        while (collIndex < collections.length) {

            collName = collections[collIndex];

            db[collName].forEach(function (page) {

                console.log(page);

            });

            collIndex += 1;

        }

        console.log()

        done();

    });

};

// write markdown files for jimped images
exports.write = function (done) {

    writeMD(done)

};
