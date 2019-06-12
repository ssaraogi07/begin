function SortArray(arr) {
    //private function
    function Sort(arr, compare) {
        return arr.sort(compare);
    }
    this.originalArray = arr;
    this.getSortedArray = function(compare) {
        return Sort(this.originalArray, compare);
    };

}

function SortObjectArray(arr) {
    SortArray.call(this,arr);
    function compare(a, b) {
        if (a.value < b.value)
            return -1;
        if (a.value > b.value)
            return 1;
        return 0;
    }
    var t = this;
    this.getSortedArray = this.getSortedArray.bind(this, compare);
}

SortObjectArray.prototype = Object.create(SortArray.prototype);

var arr = new SortArray([4,2,3,1]);
console.log(arr.getSortedArray());

var oarr = new SortObjectArray([{value:4},{value:2},{value:3},{value:1}]);
console.log(oarr.getSortedArray());
