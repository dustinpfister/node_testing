var fs = require('fs'),
path = require('path');

var readDir = function (dir, forItem) {

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

                readDir(itemLoc);

            }

        });

    });

};

readDir('./source', function (itemLoc) {

    //console.log(itemLoc);

    itemLoc.match(/txt$/);


});
