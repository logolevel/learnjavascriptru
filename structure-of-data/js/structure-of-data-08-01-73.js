var obj = {
    className: 'open mymenu'
}

function addClass(obj, cls) {
    var arr = obj.className.split(' ');

    if ( arr.indexOf(cls) < 0 ) {
        arr.push(cls);
    }

    obj.className = arr.join(' ');
}

addClass(obj, 'new');
addClass(obj, 'up');
addClass(obj, 'menu');

console.log(obj)
