var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js';
document.head.appendChild(script);

function groupObjectsBy(arr) {
    return _.groupBy(arr, 'channel');
}

var obj = [
    {
        'channel': 'A',
        'name': 'electronics'
    },
    {
        'channel': 'A',
        'name': 'shoe'
    },
    {
        'channel': 'B',
        'name': 'apparel'
    },
    {
        'channel': 'C',
        'name': 'electronics'
    },
];

console.log(groupObjectsBy(obj));