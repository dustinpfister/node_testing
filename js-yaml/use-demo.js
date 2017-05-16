var yaml = require('js-yaml'),
fs = require('fs');

fs.readFile('./config.yml', 'utf8', function (e, data) {

    var conf;

    if (e) {

        console.log('config.yml not found.');

    } else {

        conf = yaml.safeLoad(data, 'utf8');

        if (conf.options['displayGreating']) {

            console.log('hello ' + conf.userName);

        }

        if (conf.options['displayTime']) {

            console.log('the time is: ' + new Date());

        }

    }

});

/*
try {

var conf = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));

if (conf.options['displayGreating']) {

console.log('hello ' + conf.userName);

}

if (conf.options['displayTime']) {

console.log('the time is: ' + new Date());

}

} catch (e) {

console.log('congif.yml not found.');

}
*/
