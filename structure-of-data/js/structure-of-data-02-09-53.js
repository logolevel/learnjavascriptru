function randomInteger(min, max) {
    max = max + 1;
    console.log( min +  Math.floor( Math.random() * (max - min) ) );
}

randomInteger(10, 15);