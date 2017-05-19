var http = require('http');

var req = http.request({
    host : 'www.google.com',
    method : 'GET',
    path : '/'

}, function (err, one, two) {

    console.log(err);

});

req.end();
