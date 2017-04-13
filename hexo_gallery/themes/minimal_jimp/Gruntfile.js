module.exports = function (grunt) {

    var fs = require('fs'),
    sourcePath = '../../source/img';

    // Default task(s).
    grunt.registerTask('default', function () {

        console.log('minimal_jimp default grunt task:');
        console.log('nothing yet.');

        done = this.async();

        fs.readdir(sourcePath, function (one, two) {

            console.log('read dir:');
            console.log(one);
            console.log(two);

            done();

        });

    });

};
