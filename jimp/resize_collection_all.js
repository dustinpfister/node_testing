var Jimp = require('jimp'),
fs = require('fs'),
filePat = /\.jpg$|\.png$/,
quality = 25,
size = 32;

var processIMG = (function () {

    var fileNames = [],

    api = function () {

        return fileNames;

    };

    api.getFileNames = function (done) {

        fileNames = [];

        done = done || function () {};

        fs.readdir('./source', function (err, data) {

            if (err) {

                console.log('Error');
                console.log(err);

            } else {

                data.forEach(function (fn) {

                    if (fn.match(filePat)) {

                        fileNames.push(fn);

                    }

                });

                done(fileNames);

            }

        });

    };

    return api;

}
    ());

processIMG.getFileNames(function (names) {

    names.forEach(function (fileName) {
		
        Jimp.read('./source/' + fileName, function (err, img) {

            console.log(fileName + ' = okay');

            img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
            .quality(quality)
            .write('./build/' + fileName + 'sized_' + size + '.jpg'); // save

        });

    });

});

/*
fs.readdir('./source', function (err, data) {

if (err) {

console.log('Error');
console.log(err);

} else {


data.forEach(function (fileName) {

if (fileName.match(filePat)) {

console.log(fileName);

Jimp.read('./source/' + fileName, function (err, img) {

console.log('yes');

img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
.quality(quality)
.write('./build/' + fileName + 'sized_' + size + '.jpg'); // save

});

}

});


}

});

 */

/*
// open a file called "test.png"
Jimp.read('./source/blues.jpg', function (err, img) {

var sizes = [64, 128, 256],
quality = 10;

if (err) {

throw err;

}

// resize for all sizes
sizes.forEach(function (size) {

// resize, and save
//img.resize(size, size) // resize
img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
.quality(quality)
.write('./build/blues_stf_BEZIER_q' + quality + '_' + size + '.jpg'); // save

});

});
*/
