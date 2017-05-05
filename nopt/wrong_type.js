var nopt = require('nopt'),
parsed;

nopt.invalidHandler = function (key, val, types) {

    console.log(key + ' must be a Number');

};

parsed = nopt(

        // options
    {

        "base" : Number,
        "exp" : Number

    },

        // shorthands
    {

        "b" : "--base"

    },

        process.argv, 2);

if (parsed.base && parsed.exp) {

    console.log('looks legit, here we go:');
    console.log(Math.pow(parsed.base, parsed.exp));

} else {

    console.log('try again, this time with feeling.');

}
