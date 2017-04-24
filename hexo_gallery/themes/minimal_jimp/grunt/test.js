var gallery = require('./gallery_api.js');

gallery.processSource({

    cName : 'robots',
	width: 64,
	quality: 80,
	overwrite: true

}, function () {

    console.log('so yeah done');

});

/*
gallery.forAll('robots',function(){

console.log('done with for all.');

});

*/
