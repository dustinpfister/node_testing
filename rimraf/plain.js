var fs = require('fs'),
path = require('path'),

matchPat = /\.txt$/,

readDir = function (dir, forItem) {

    forItem = forItem || function (itemLoc) {
        console.log(itemLoc)
    };

    // read the given dir
    fs.readdir(dir, function (err, content) {

        // for all contents in the path
        content.forEach(function (item) {

            itemLoc = path.join(dir, '/' + item);

            // log the current item
            forItem(itemLoc);

            // if a dir, continue recursively
            if (fs.lstatSync(itemLoc).isDirectory()) {

                readDir(itemLoc,forItem);

            }

        });

    });

};

readDir('./source', function (itemLoc) {

    console.log( itemLoc.match(matchPat) );

});
