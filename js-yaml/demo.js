var yaml = require('js-yaml'),
fs = require('fs');

try {
    var doc = yaml.safeLoad(fs.readFileSync('./test.yml', 'utf8'));
    console.log(doc);
} catch (e) {
    console.log(e);
}
