

exports.check = function (done) {

    var dir = require('node-dir');

    dir.readFiles(

        // path to read
        'layout', 

        // options
        {
            match : /\.ejs$/
            //exclude : /^\./
        },

        // content call back
        function (err, content, filename, next) {

            console.log(filename);
            next();

        },

        // finished callback
        function (err, files) {

            if (err) {

                console.log(err);

            }

            done();

        }

    );

};

exports.foo = function (done) {

    done('yeah');

};
