var gallery = require('./gallery_api.js');

gallery.forAll({

   // cName : 'art_heart'

}, function () {

    console.log('done');

});

/*
gallery.forAll('robots',function(){

console.log('done with for all.');

});

*/
