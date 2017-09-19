var _ = require('lodash');

var Unit = function (obj) {

    obj = obj || {};

    this.x = obj.x || 0;
    this.y = obj.y || 0;

};

// size value in the prototype
Unit.prototype.size = 64;

// new Unit
var u = new Unit({
        x : 12,
        y : 5
    });

// only x and y are displayed in the console (nothing from the prototype)
_.forOwn(u, function (val, key, obj) {

    console.log(key + ' : '+val);

});

// _.forIn on the other and will display everything.
_.forIn(u, function (val, key, obj) {

    console.log(key + ' : '+val);

});