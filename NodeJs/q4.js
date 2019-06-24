const request = require('request');
const fs = require('fs');
const zip = require('zip-folder');

const imageUrls = [
    'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg',
    'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg',
    'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg',
    'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg',
    'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg',
    'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg',
    'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
    'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'
];
var fetchImages = function(url, index) {
    index=index+1;
    var folder = Math.floor(index/5) + 1;
    return new Promise((resolve, reject) => {
        request(url)
        .on('response', (r) => {
                console.log("Fetched image number: "+index);
                resolve();
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .pipe(fs.createWriteStream(`images_${folder}/output_${index}.jpg`));
    });
};

var compress = function(dir) {
    zip(dir, `${dir}/archive.zip`, function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('EXCELLENT');
        }
    });
}

var requestImages = async function() {
    var r = await Promise.all(imageUrls.map(fetchImages));
    console.log('fetch finished');
    compress('images_1');
    compress('images_2');
}

requestImages();
