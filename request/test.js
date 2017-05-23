var request = require('request');
request('http://www.google.com', function (err, res, html) {
 
    if(err){
 
        console.log(err)
 
    }else{
 
        // logg the raw HTML
        console.log(html);
 
    }
 
});