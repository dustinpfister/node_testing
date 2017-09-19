var _ = require('lodash'),
chalk = require('chalk');

//console.log(  _.difference([1,2,3,4,5], [2,5,6])  );

console.log(_.differenceWith([1, 2, 3, 4, 5], [2, 5, 6], [4], function (ar, va) {

        if (ar === 3) {

            return true;

        }

        return ar === va;

    }));
