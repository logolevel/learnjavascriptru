function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (piece === undefined) {
            return text;
        }
        text += piece;
    }

    buffer.clear = function() {
        text = '';
    }

    return buffer;
}

var buffer = makeBuffer();

buffer('Hello');
buffer('World');
console.log( buffer() );

buffer.clear();
console.log( buffer() );
