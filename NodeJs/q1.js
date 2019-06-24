var xmlParser = require('xml-parser');
var fs = require('fs');

var XmlParser = function(path) {
    var xml = fs.readFileSync(path, 'utf8');
    var inspect = require('util').inspect;

    var obj = xmlParser(xml);
    console.log(inspect(obj, { colors: true, depth: Infinity }));
};

module.exports = XmlParser;

XmlParser('test.xml');