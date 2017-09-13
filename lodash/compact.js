var _ = require('lodash'),
chalk = require('chalk');

// [ 1, 3, {}, 'foo' ]
console.log(_.compact([0,1,false,3,'',{},null,undefined,'foo']));