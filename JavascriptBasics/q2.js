var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js';
document.head.appendChild(script);

var MetaDataParser = function(version, channel, keyField) {
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
}

var metaDataParser = new MetaDataParser(1, 'A', 1);

metaDataParser.getVersion = function() {
    return this._version
}

metaDataParser.setVersion = function(version) {
    this._version = version;
}

metaDataParser.getChannel = function() {
    return this._channel;
}

metaDataParser.setChannel = function(channel) {
    this._channel = channel;
}

metaDataParser.getKeyField = function() {
    return this._keyField;
}

metaDataParser.setKeyField = function(keyField) {
    this._keyField = keyField;
}

console.log(metaDataParser.getKeyField());
metaDataParser.setKeyField(2);
console.log(metaDataParser.getKeyField());

//Part 2

MetaDataParser.prototype.getKeyFields = function(arr) {
    return _.map(arr, '_keyField');
};

var objArr = [];
objArr.push(new MetaDataParser('1', 'A', 1));
objArr.push(new MetaDataParser('1', 'B', 2));
objArr.push(new MetaDataParser('1', 'C', 3));

console.log(objArr[0].getKeyFields(objArr));
