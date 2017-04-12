var Jimp = require("jimp");

// open a file called "blues.jpg" in the source folder
Jimp.read('./source/blues.jpg', function (err, img) {

    var sizes = [64, 128, 256],
    quality = 10;

    if (err) {

        throw err;

    }

    // resize for all sizes
    sizes.forEach(function (size) {

        console.log('resize to: ' + size);

        // resize, and save to the build folder
        img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
        .quality(quality)
        .write('./build/blues_q_' + quality + '_s_' + size + '.jpg'); // save

    });

});
