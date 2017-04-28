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

fs.readdir(postsPath, function (err, data) {

    var index = 0,
    next = function () {

        if (data[index] != undefined) {

            fs.readFile(path.join(postsPath, data[index]), 'utf8', function (err, data) {

                // get header
                var startIndex = data.indexOf('---'),
                endIndex = data.indexOf('---', startIndex + 3),
                text = data.substr(startIndex, endIndex - startIndex + 3),

                meta = {};

                //console.log(text.split('\n'));

                text.split('\n').forEach(function (line) {

                    var line = line.split(/:(.+)/);

                    if (line[0].substr(0,3) != '---') {

                        meta[line[0]] = line[1];

                    }

                });

                console.log(meta);

                if (index < data.length - 1) {

                    index += 1;

                    next();

                }

            });

        }

    };

    next();

});
