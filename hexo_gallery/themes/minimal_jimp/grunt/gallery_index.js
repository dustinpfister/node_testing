var fs = require('fs'),
linkPath = '/gallery',
imgPath = '/img',
markdownPath = '../../source/gallery';

exports.runScript = function (done) {

    console.log('building index.');

    fs.readdir(markdownPath, function (err, files) {

        //console.log(files);
        var content = '',
        fn;

        files.forEach(function (filename) {

            fn = filename.replace(/\.md$/, '');

            if (filename != 'index.md') {

                //content += '[' + fn + '](' + linkPath + '/' + fn + '.html)\n';

                content += '<a href=\"'+imgPath+'/'+filename.replace(/\.md$/,'')+'.jpg\">link</a><br>';

            }

        });

        console.log(content);

        fs.writeFile(markdownPath + '/index.md', content, 'utf8', function () {

            console.log('done writing index');

            done();

        });

    });

};
