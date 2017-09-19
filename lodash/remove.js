var _ = require('lodash');

/*
var arr = ['foo', 27, 'man', 42, 'chew'];

_.remove(arr, function (el) {

    // rremove all numbers
    return typeof el === 'number';

});

console.log(arr); // ['foo','man',chew];
*/

var enemy = [{
        id : 'en_1',
        hp : 12,
        maxHP : 50
    }, {
        id : 'en_2',
        hp : 0,
        maxHP : 50
    }, {
        id : 'en_3',
        hp : 50,
        maxHP : 50
    }
];


// remove all dead enemies
_.remove(enemy, function (e) {
    return e.hp <= 0;
});

console.log(enemy);
// [ { id: 'en_1', hp: 12, maxHP: 50 },
//  { id: 'en_3', hp: 50, maxHP: 50 } ]
