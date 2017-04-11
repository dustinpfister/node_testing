var Jimp = require("jimp");
 
// open a file called "test.png" 
Jimp.read("./source/test.png", function (err, img) {

    if (err) throw err;

    // resize to 64 x 64, and save
    img.resize(64, 64)            // resize 
         .write("./build/test_64_64.jpg"); // save

});