var sm = require('sitemap'),
fs = require('fs'),
path = require('path'),
postsPath = './source/_posts';

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
        hostname : 'http://dustinpfister.github.io',
        cacheTime : 600000, // 600 sec - cache purge period
        urls : [{
                url : '/',
                changefreq : 'daily',
                priority : 0.8
            }, {
                url : '/archives/',
                changefreq : 'weekly',
                priority : 0.6
            }, {
                url : '/games/',
                changefreq : 'weekly',
                priority : 0.4
            }, {
                url : '/about/',
                changefreq : 'monthly',
                priority : 0.2
            },
        ]
    });
/*
// Generates XML with a callback function
sitemap.toXML(function (err, xml) {

if (!err) {

console.log(xml)
}

});

// Gives you a string containing the XML data
var xml = sitemap.toString();

 */

var getHeaders = function (done) {

    var headers = [];

    fs.readdir(postsPath, function (err, fileNames) {

        var index = 0,
        next = function () {

            if (fileNames[index] != undefined) {

                fs.readFile(path.join(postsPath, fileNames[index]), 'utf8', function (err, data) {

                    // get header
                    var startIndex = data.indexOf('---'),
                    endIndex = data.indexOf('---', startIndex + 3),
                    text = data.substr(startIndex, endIndex - startIndex + 3),

                    meta = {};

                    text.split('\n').forEach(function (line) {

                        var line = line.split(/:(.+)/);

                        if (line[0].substr(0, 3) != '---') {

                            meta[line[0]] = line[1];

                        }

                    });

                    headers.push(meta)

                    if (index < fileNames.length - 1) {

                        index += 1;

                        next();

                    } else {

                        done(headers);

                    }

                });

            }

        };

        next();

    });

},

// find actual paths that will be used in the sitemap
findPaths = function () {

    getHeaders(function (headers) {

        headers.forEach(function (head) {

            var date = head.date.trim().split(' ')[0];

            //console.log(date.split('-').join('\/'));

            console.log(head);

        });

    });

};

findPaths();
