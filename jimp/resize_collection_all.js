var Jimp = require('jimp'),
fs = require('fs');

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
