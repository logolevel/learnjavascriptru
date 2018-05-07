var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 0,
    max = 3;

if ( min < arr.length && max < arr.length ) {
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
} else {
    alert('Bed interval');
}

console.log(arr[rand]);