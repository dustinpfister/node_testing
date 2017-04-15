
// just simply check what is there if anything.
exports.runScript = function (done) {

    var dir = require('node-dir');

    dir.readFiles(

        // path to read
        '../../source/img/gallery_collections',

        // options
    {
        match : /\.jpg$|\.png$/,
        //matchDir:/./,
        exclude : /_jimped_/
    },

        // content call back
        function (err, content, filename, next) {

        //console.log(filename);
        next();

    },

        // finished callback
        function (err, files) {

        if (err) {

            console.log(err);

        }

        console.log(files);

        done();

    });

};
