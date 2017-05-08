var fs = require('fs');

fs.unlink('./test.txt', function (err) {

    console.log(err);

});
