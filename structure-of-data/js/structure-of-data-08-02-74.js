// function camelize(str) {
//     var arr = str.split('-');
    
//     for (var i = 0; i < arr.length; i++) {
//         if (i < 1) {
//             var newArray = [];
//             newArray.push(arr[i]);
//         }
//         if (i > 0) {
//             var firstLetter,
//                 arrayWord,
//                 newWord;

//             firstLetter = arr[i].charAt().toUpperCase();
//             arrayWord = arr[i].split('');
//             arrayWord.splice(0, 1, firstLetter);
//             newWord = arrayWord.join('');
//             newArray.push(newWord);
//         }
//     }

//     var result = newArray.join('');

//     console.log(result);
// }

function camelize(str) {
    var arr = str.split('-');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

console.log( camelize("list-style-image") );
console.log( camelize('-webkit-transition') );
