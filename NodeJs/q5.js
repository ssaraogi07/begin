var shortenUrl = require('shorten-url')

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


const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'original', title: 'ORIGINAL URL'},
        {id: 'short', title: 'SHORTENED URL'}
    ]
});

const UrlShortner = function(arr) {
    var allUrls = [];
    arr.forEach((url)=> {
        var r = shortenUrl(url, 40);
        allUrls.push({
            original: url,
            short: r
        });
    });

    console.log(allUrls);
    csvWriter.writeRecords(allUrls)     // returns a promise
    .then(() => {
        console.log('...Done');
    });
}

UrlShortner(imageUrls);