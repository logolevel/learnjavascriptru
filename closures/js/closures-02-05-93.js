function makeCounter() {
    var currentCount = 1;

    return function() {
        var currentCount;
        console.log(currentCount);
    }
}

makeCounter()