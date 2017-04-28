var SitemapGenerator = require('sitemap-generator');
 
// create generator
var generator = new SitemapGenerator('http://dustinpfister.github.io');
 
// register event listeners
generator.on('done', function (sitemaps) {

  console.log(sitemaps[0]); // => array of generated sitemaps

});

generator.on('fetch', function (status, url) {
  // log url
  
  console.log('fetch: ' + url);
  
});

 
// start the crawler
generator.start();