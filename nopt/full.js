
// example of nopt
(function () {

    var nopt = require('nopt'),
    fs = require('fs'),
    path = require('path'),
    parsed,
    prop,

    // hard coded defaults
    option = {

        write : false,
        text : 'foobar',
        filename : 'textfile',
        path : './'
    },

    // set arguments from CLI
    setFromCLI = function () {

        // loop over values in the option object
        for (prop in option) {

            // if the property is in the parsed object...
            if (parsed[prop] != undefined) {

                // use it
                option[prop] = parsed[prop];

            }

        }

    },

    // write file method that is to be called if option.write is true
    writeFile = function () {

        if (option.write) {

            fs.writeFile(
                path.join(option.path, option.filename + '.txt'),
                option.text,
                'utf8',
                function (err) {

                if (!err) {

                    console.log('file written.');

                }
            });

        } else {

            console.log('log only.');

        }

    };

    // invalid argument handler.
    nopt.invalidHandler = function (key, val, types) {

        console.log(key + ' error, argument ignored.');

    };

    // parsed arguments given from command line
    parsed = nopt(

            // options
        {

            "write" : Number,
            "text" : String,
            "filename" : String,
            "path" : path

        },

            // shorthands
        {

            "w" : "--write",
            "t" : "--text",
            "f" : "--filename",
            "p" : "--path"

        },

            process.argv, 2);

    // set arguments to options object
    setFromCLI();

    // call the writeFile method
    writeFile();

    console.log(option);
    console.log(option.text);

}
    ());
