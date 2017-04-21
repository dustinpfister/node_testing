


module.exports = function (grunt) {

    var regMod = function (name, options) {

        options = options || {};

        grunt.registerTask(name, function () {

            done = this.async();

            require('./grunt/gallery_' + name + '.js').runScript(options, function () {

                console.log('done with script: ' + name);

                done();

            });

        });

    };

    grunt.registerTask('default', function () {

        console.log('do default task yet for minimal_jimp');

    });

    // check for images
    regMod('check', {});

    // process thum images
    regMod('process_thum', {});

    // process images
    regMod('process', {
        width : 320
    });

    // write thums
    regMod('thums', {});

    // write mark down files
    regMod('writemd', {});

    // write mark down files
    regMod('index', {});

};
