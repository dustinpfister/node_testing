var http = require('http');

var req = http.request({
    host : 'www.google.com',
    method : 'GET',
    path : '/'

}, function (res) {

    res.on('data', function(){
		
		
	});
	
	res.on('end', function(){
		
		
	});

});

req.end();
