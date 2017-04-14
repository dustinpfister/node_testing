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

	console.log(filename);
	
    next();

}, function (err, files) {

    if (err) {
        throw err;
    }

   // console.log('finished reading files:', files);

});
