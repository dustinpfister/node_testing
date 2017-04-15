


module.exports = function (grunt) {

    var regMod = function (name) {

        grunt.registerTask(name, function () {

            done = this.async();

            require('./grunt/gallery_' + name + '.js').runScript(function () {

                console.log('done with script: ' + name);

                done();

            });

        });

    };

    grunt.registerTask('default', function () {

        console.log('do default task yet for minimal_jimp');

    });

    // check for images
    regMod('check');
    /*
    grunt.registerTask('check', function () {

    done = this.async();

    require('./grunt/gallery_check.js').runScript(function () {

    console.log('done with check');

    done();

    });

    });
     */

    // process images
    regMod('process_thum');
    /*
    grunt.registerTask('process', function () {

    done = this.async();

    require('./grunt/gallery_process_thum.js').runScript(function () {

    console.log('done thum process');

    done();

    });

    });
     */

    // write mark down files
    grunt.registerTask('writemd', function () {

        done = this.async();

        require('./grunt/gallery_writemd.js').runScript(function () {

            console.log('done write process');

            done();

        });

    });

    // write mark down files
    grunt.registerTask('index', function () {

        done = this.async();

        require('./grunt/gallery_index.js').runScript(function () {

            console.log('done building index');

            done();

        });

    });

};
