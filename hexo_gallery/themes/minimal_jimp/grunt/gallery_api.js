
var fs = require('fs'),
path = require('path');

// get a list of collection names
exports.getCollectionFolders = function (cPath, done) {

    cPath = cPath || './';
    done = done || function (folders) {

        console.log('no callback given');
        console.log(folders);

    };

    console.log('gallery_api: getting collection names...');

    fs.readdir(cPath, function (err, contents) {

        var folders = [];

        if (err) {

            console.log('err');

        } else {

            contents.forEach(function (file, index) {

                var filePath = path.join(cPath, file);

                fs.stat(filePath, function (err, data) {

                    if (err) {

                        console.log(err);

                    } else {

                        if (data.isDirectory()) {

                            folders.push(file);

                        }

                    }

                    // call done callback only when we get to the last index
                    if (index === contents.length - 1) {

                        done(folders);

                    }

                });

            });

        }

    });

}
