var _ = require('lodash');

var db = [
    {id : 17, name : 'joe'},
    {id : 12, name : 'jake'},
    {id : 10, name : 'emme'}
];

var q = _.findIndex(db,function(obj){ return obj.name == 'jake';});

console.log(db[q]);
