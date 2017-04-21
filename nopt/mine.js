
var args = process.argv.slice(2),

options = {

    readOnly : false,
    sourcePath : '.'

};

args.join().split('-').forEach(function (arg) {

    arg = arg.split(',');

    if (arg[0] === 'r') {

        options.readOnly = true;

    }

    if (arg[0] === 'd') {

        options.sourcePath = arg[1];

    }

});

console.log(options);
