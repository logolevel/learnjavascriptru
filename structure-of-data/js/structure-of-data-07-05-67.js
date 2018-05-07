var number,
    sum = 0,
    arr = [];

do {
    number = prompt('Enter number: ', 0);

    if ( isNaN(number) == false && number !== null && number !== "" ) {
        arr.push(number);
        console.log(arr);
    } else {
        for (var i = 0; i < arr.length; i++) {
            sum = sum + +arr[i]; 
        }
        console.log('Summa = ' + sum);
        break;
    }
} while( isNaN(number) == false && number !== null && number !== "" );