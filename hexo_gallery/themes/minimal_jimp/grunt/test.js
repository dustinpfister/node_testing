var gallery = require('./gallery_api.js');

gallery.processSource({

    cName : 'robots',
	width: 173

}, function () {

    console.log('done');

});

/*
gallery.forAll('robots',function(){

console.log('done with for all.');

});

*/
