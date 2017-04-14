var dir = require('node-dir');

/*
dir.files('./public', function(err, files) {
if (err) throw err;
console.log(files);
});
 */

dir.readFiles('public', {
    match : /\.html$/
    //exclude : /^\./
}, function (err, content, filename, next) {

    if (err) {
        throw err;
    }

    //console.log('content:', content);

    var timeEls = content.match(/\<time([\s\S]*?)\>/g);

    timeEls.forEach(function (time) {

        if (time.match(/itemprop="dateModified"/)) {

            console.log(time);

        }

    });

    //console.log(filename);

    next();

}, function (err, files) {

    if (err) {
        throw err;
    }

    // console.log('finished reading files:', files);

});
