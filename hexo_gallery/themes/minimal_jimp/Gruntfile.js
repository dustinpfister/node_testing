

module.exports = function (grunt) {

    grunt.registerTask('default', function () {

        console.log('do default task yet for minimal_jimp');

    });

    // check for images
    grunt.registerTask('check', function () {

        done = this.async();

        require('./grunt/gallery_check.js').check(function () {

            console.log('done with check');

            done();

        });

    });

    // process images
    grunt.registerTask('process', function () {

        done = this.async();

        require('./grunt/gallery_process_thum.js').process(function () {

            console.log('done thum process');

            done();

        });

    });

    // write mark down files
    grunt.registerTask('writemd', function () {

        done = this.async();

        require('./grunt/gallery_writemd.js').write(function () {

            console.log('done write process');

            done();

        });

    });

};
