var sm = require('sitemap');
// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
        hostname : 'http://dustinpfister.github.io',
        cacheTime : 600000, // 600 sec - cache purge period
        urls : [{
                url : '/',
                changefreq : 'daily',
                priority : 0.7
            }, {
                url : '/about/',
                changefreq : 'monthly',
                priority : 0.3
            }, {
                url : '/page-3/',
                changefreq : 'weekly',
                priority : 0.5
            }
        ]
    });
// Generates XML with a callback function
sitemap.toXML(function (err, xml) {

    if (!err) {

        console.log(xml)
    }

});

// Gives you a string containing the XML data
var xml = sitemap.toString();
