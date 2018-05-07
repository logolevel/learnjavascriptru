var arr = ["test", 2, 1.5, false ];

function find(arr, value) {
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] === value ) {
            console.log( "value: " + arr[i] + ", number: " +  i );
            break;
        } else if ( i === (arr.length - 1) && arr[i] !== value ) {
            console.log(-1);
        }
    }
}


find(arr, "test");
find(arr, 2);
find(arr, 1.5);

find(arr, 0);