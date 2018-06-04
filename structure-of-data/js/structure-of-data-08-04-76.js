arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {

        if ( arr[i] < a || arr[i] > b ) {
            arr.splice(i--, 1);
        }
    }
}

console.log(arr);
filterRangeInPlace(arr, 2, 4);
console.log(arr);
