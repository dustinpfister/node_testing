var fs = require('fs');

var readFoo = new Promise(function (resolve, reject) {

        fs.readFile('./foo.txt', 'utf8', function (e, data) {

            if (e) {

                reject(e);

            } else {

                resolve(data);

            }

        });

    });

readFoo.then(function () {

    console.log('yes file!');

}).catch (function (e) {

    console.log('file foo not found');
    console.log(e);

});
