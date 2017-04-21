var nopt = require('nopt'),

parsed = nopt(

        // options
    {

        "flag" : Boolean,
        "mood" : ["happy", "sad", "very sad"]

    },

        // shorthands
    {

        "f" : ["flag", "true"],
        "h" : ["mood", "happy"],
        "s" : ["mood", "sad"],
        "d" : ["mood", "very sad"]

    },

        process.argv, 2);

console.log(parsed);
