

var dir = require('node-dir'),
fs = require('fs'),
path = require('path'),
galleryPath = '../../source/img/gallery_collections',
sitePath = '/img/gallery_collections',
markdownPath = '../../source/gallery',

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
        match : /_jimped_64\.jpg$|\.png$/,
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

// build markdown pages array
buildMD = function (done) {

    var collIndex = 0,
    collections = [],
    collName = '',
    pageIndex = 0,
    imageIndex = 0,
    markdown = [];

    console.log('building database...');
    buildDB(function () {

        console.log('database done.');
        console.log('breaking down into pages...');

        for (var collection in db) {

            db[collection] = breakToPages(db[collection], options.perPage);

        }
        console.log('database broken to pages.');
        console.log('');

        collections = Object.keys(db);

        collIndex = 0;
        while (collIndex < collections.length) {

            collName = collections[collIndex];

            db[collName].forEach(function (page, pageIndex) {

                var content = '---\n' +
                    'layout: gallery\n' +
                    '---\n\n';

                content += '<div class=\"jimped_thum_collection\">\n\n';

                page.forEach(function (img) {

                    // link to source image
                    content += '<div class=\"jimped_thum\">\n' +

                    '<a href=\"' + path.join(sitePath, collName, img.filename.replace(/_jimped_64/, '') + '.jpg') + '\">\n' +

                    // use thum images on the page
                    '<img src=\"' + path.join(sitePath, collName, img.filename + '.jpg') + '\">\n' +

                    '<\/a>\n<\/div>\n\n';

                    //'<\/div>\n\n';

                    /*
                    content += '![' + img.filename + '](' + sitePath + '/' + collName + '/' + img.filename + '.jpg)\n';
                     */
                });

                content += '<p>page: ' + pageIndex + '; pages: ' + collections.length + '<\/p>';

                if (Number(pageIndex + 1) < db[collName].length) {

                    var nextPage = collName + '_' + Number(pageIndex + 1) + '.html';

                    content += '<a href=\"' + nextPage + '\">next page |<\/a>';

                }

                // if page index is not zero there is a prev page
                if (pageIndex != 0) {

                    var prevPage = collName + '_' + Number(pageIndex-1) + '.html';

                    content += '<a href=\"' + prevPage + '\">| prev page<\/a>';

                }

                if (pageIndex === 0) {

                    content += '<p>first page</p>';

                }

                content += '<br><\/div>';

                markdown.push({

                    filename : collName + '_' + pageIndex + '.md',
                    content : content

                })

            });

            collIndex += 1;

        }

        done(markdown);

    });

};

// write markdown files for jimped images
exports.runScript = function (options, done) {

    var page = 0;

    next = function (markdown, done) {

        console.log(markdown[page].filename);

        fs.writeFile(

            markdownPath + '/' + markdown[page].filename,
            markdown[page].content,
            'utf8',
            function () {

            if (page < markdown.length - 1) {

                page += 1;
                next(markdown, done);

            }

        });

    };

    buildMD(function (markdown) {

        console.log('we have markdown.');

        //console.log(markdown);

        next(markdown, function () {

            done();

        });

    });

};
