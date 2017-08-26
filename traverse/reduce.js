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

obj = trav.reduce(function (acc, node) {

        var ref = acc,
        self = this;

        // if the node is a number
        if (typeof node === 'number') {

            // go over the key path
            this.path.forEach(function (key, index) {

                // are we at the end of the key path?
                if (index === self.path.length - 1) {

                    // then et the node value
                    ref[key] = node;

                } else {

                    // else create a new object if we need one
                    if (ref[key] === undefined) {

                        ref[key] = {};

                    }

                    // change the ref to the next object in the path
                    ref = ref[key];

                }

            });

        }

        // return the new object being made with reduce
        return acc;

    }, {});

console.log(obj); // { foobar: { foo: { b: 41, a: 43, r: 42 } } }
