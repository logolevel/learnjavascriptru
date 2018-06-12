var currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter() );


console.log( counter2() );