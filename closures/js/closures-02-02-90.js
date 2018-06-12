var value = 0;

function f() {
    if (true) {
        var value = true;
    } else {
        value = false;
    }

    console.log('in', value);
}

f();

console.log('out', value);

