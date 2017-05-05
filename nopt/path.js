var nopt = require('nopt'),
path = require('path');

nopt.invalidHandler = function (one, two, three) {

    console.log('Path given is not valid');

    console.log(one);
    console.log(two);
    console.log(three);

    console.log('');
}

var parsed = nopt(

        // options
    {

        "target" : path,
        "num" : [Number]

    },

        // shorthands
    {

        "t" : "--target"

    },

        process.argv, 2);

//console.log(parsed);

console.log(nopt);
