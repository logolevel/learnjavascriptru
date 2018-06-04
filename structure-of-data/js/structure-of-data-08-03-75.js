var obj = {
    className: 'open open menu open'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for(var i = 0; i < arr.length; i++) {
        if ( arr[i] === cls ) {
            arr.splice(i, 1);
            i--;
        }
    }

    obj.className = arr.join(' ');
}

console.log(obj);
removeClass(obj, 'open');
console.log(obj);