var Database = require('warehouse');
var db = new Database({

        path : './call-log.json'

    });

var Post = db.model('calls', {
        args : String,
        time : {
            type : Date,
        default:
            Date.now
        }
    });

db.load(function(){
	
	console.log('error');
	
}).catch(function(){
	
	console.log('error');
	
});

/*
    Post.insert({

        args : process.argv.join(' : ')

    }).then(function (post) {

        console.log(post);

        db.save();
    });
*/