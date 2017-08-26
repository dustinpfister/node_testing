var traverse = require('traverse'),

// the object to walk
foo = {

    bar : 'foo',
    barfoo : false,

    foobar : {

        bar : 'foo',
        foo : {

            b : 41,
            a : 43,
            r : 42
        }

    }

};

var trav = traverse(foo),

// grab an array of all paths in the objest
paths = trav.paths();

// looping over the array
paths.forEach(function (path) {

    // a path is an array of key values to a certain path
    console.log(path);

    // the traverse get method excepts a path array
    console.log(trav.get(path));

});
