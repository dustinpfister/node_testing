var traverse = require('traverse'),

// the object to walk
foo = {

    bar : 'foo',

    foobar : {

        bar : 'foo',
        foo : {

            b : 41,
            a : 43,
            r : 42
        }

    }

};

// walk the object with forEach
traverse(foo).forEach(function (node,i,a) {

    if(node === 42){
		
		console.log('The anwser has been found!');
		
		console.log('forEach aurgs');
		console.log('node: ' + node); // the answer
		console.log('path: ' + this.path.join('/')); // the way to the answer
		
	}

});
