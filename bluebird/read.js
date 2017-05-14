var fs = require('fs');

var readFoo = new Promise(function (resolve, reject) {

        fs.readFile('./foo.txt', 'utf8', function (e, data) {

            if (e) {

                reject(e);

            } else {

                resolve(data);

            }

        });

    }),

writeFoo = new Promise(function (reslove, reject) {

        fs.writeFile('./foo.txt', 'foobar', 'utf8', function (e) {

            if (e) {

                reject(e);

            } else {

                reslove();

            }

        });

    });

readFoo.then(function (data) {

    console.log('yes, we have foo.txt!');
    console.log(data);

}).catch (function (e) {

    console.log('file foo not found, writing...');

    writeFoo.then(function () {

        console.log('foo.txt is alive.');

    }).catch (function (e) {

        console.log('error writing foo.txt');
        console.log(e);

    });

});
