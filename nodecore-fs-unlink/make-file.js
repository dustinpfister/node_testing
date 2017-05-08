var fs = require('fs');

fs.writeFile('./test.txt', 'test data', 'utf8', function () {

    console.log('we have a file.');

});
