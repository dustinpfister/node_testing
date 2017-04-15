

var fs = require('fs'),
Jimp = require('jimp'),
galleryPath = '../../source/img/gallery_collections',
dir = require('node-dir');

/*
var process = (function () {

var filePat = /\.jpg$|\.png$/,
excludePat = /_jimped_/,
fileNames = [],
index = 0,
len = 0,
sourceDir = './source',
targetDir = './target',

api = function () {};

// get a list of fileNames
api.getFileNames = function (path, done) {

fileNames = [];

done = done || function () {};

sourceDir = path;
targetDir = path + '/target';

fs.readdir(sourceDir, function (err, data) {

if (err) {

console.log('Error');
console.log(err);

} else {

data.forEach(function (fn) {

if (fn.match(filePat) && !fn.match(excludePat)) {

fileNames.push(fn);

}

});

len = fileNames.length;
done(fileNames);

}

});

};

api.processNext = function (done) {

console.log('');
console.log('processing image ' + index + '/' + len);
console.log('imageName = ' + fileNames[index]);

Jimp.read(sourceDir + '/' + fileNames[index], function (err, img) {

console.log('Jimp read okay');

img.scaleToFit(32, Jimp.AUTO, Jimp.RESIZE_BEZIER)
.quality(30)
.write(sourceDir + '/' + fileNames[index].replace(filePat, '') + '_jimped_' + 32 + '.jpg', function () {

if (index >= len - 1) {

done();

} else {

index += 1;

api.processNext(done);

}

}); // save


});

};

return api;

}
());
 */

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
