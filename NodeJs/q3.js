const request = require('request');
const fs = require('fs');

request('http://www.google.com').pipe(fs.createWriteStream('google.html'));

var res = request('http://www.google.com');
res.on('data', function(response) {
    fs.writeFileSync('google2.html', response, function(err) {
        console.log(err);
    })
})