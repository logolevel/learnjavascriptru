function makeCounter() {
    var currentCount = 1;

    return function() {
        return currentCount++;
    }
    asd();
}

var counter = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter() );
