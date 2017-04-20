var fs = require('fs'),
linkPath = '/gallery',
imgPath = '/img/gallery_collections',
markdownPath = '../../source/gallery';

exports.runScript = function (options, done) {

    console.log('building index.');

    fs.readdir(markdownPath, function (err, files) {

        //console.log(files);
        var content = '---\nlayout: gallery\n---\n',
        fn;

        content += '<div class="gallery_index_collections">\n';
        files.forEach(function (filename) {

            fn = filename.replace(/\.md$/, '');

            if (filename != 'index.md') {

                content += '<a ' +
                'href=\"' + linkPath + '/' + fn + '.html\">' +

                '<img src=\"' + imgPath + '/' + fn.replace(/_\d+$/, '') + '/thum.jpg\">\n';

                '<\/a>\n';

            }

        });
        content += '<\/div>';

        console.log(content);

        fs.writeFile(markdownPath + '/index.md', content, 'utf8', function () {

            console.log('done writing index');

            done();

        });

    });

};
