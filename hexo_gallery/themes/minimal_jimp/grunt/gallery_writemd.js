
// just simply check what is there if anything.
exports.write = function (done) {

    var dir = require('node-dir');

    dir.readFiles(

        // path to read
        '../../source/img/gallery_collections',

        // options
    {
        match : /_jimped_32\.jpg$|\.png$/,
        //matchDir:/./,
        //exclude : /_jimped_/
    },

        // content call back
        function (err, content, filename, next) {

        var ns = filename.split('\\');

        console.log(ns[ns.length - 2]);

        next();

    },

        // finished callback
        function (err, files) {

        if (err) {

            console.log(err);

        }

        done();

    });

};
