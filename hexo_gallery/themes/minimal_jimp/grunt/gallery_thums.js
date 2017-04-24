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

getCollectionFolders = function () {

    fs.readdir(galleryPath, function (err, contents) {

        console.log(contents);

        var f = contents.filter(function (file) {

                var filePath = path.join(galleryPath, file);

                fs.stat(filePath, function (err, data) {

                    console.log(err);
                    console.log(data)

                });

            });

        console.log(f);

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

    getCollectionFolders();

};
