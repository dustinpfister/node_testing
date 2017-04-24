// process gallery thum images

var Jimp = require('jimp'),
fs = require('fs'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir'),
path = require('path');

/*
function getDirectories (srcpath) {
return fs.readdirSync(srcpath)
.filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}
 */

getCollectionFolders = function (cPath, done) {

    cPath = cPath || './';
    done = done || function (folders) {

        console.log('no callback given');
        console.log(folders);

    };

    console.log(cPath);

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

                        console.log();

                        if (data.isDirectory()) {

                            folders.push(file);

                        }

                    }

                    if (index === contents.length - 1) {

                        done(folders);

                    }

                });

            });

        }

    });

};

/*
dir.readFiles(galleryPath, {}, function (err, content, filename, next) {

console.log(err);
console.log(filename);

next();

}, function () {});
 */

exports.runScript = function (options, done) {

    console.log('gallery_thums.');

    getCollectionFolders(galleryPath);

};
