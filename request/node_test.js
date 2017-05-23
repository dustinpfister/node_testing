var http = require('http'),

req = http.request({
        host : 'www.google.com',
        method : 'GET',
        path : '/'

    }, function (res) {

        res.on('data', function (data) {

            var html = data.toString();

            // Log The raw HTML
            console.log(html);

        });

    });

req.end();
