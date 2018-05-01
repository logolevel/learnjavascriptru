function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

/*second variant*/

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

/*Оба варианта функции работают одинаково*/