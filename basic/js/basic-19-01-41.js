/*
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
*/

/*loop*/
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));

/*recursion*/
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(100));

/*
using formula: sumTo(n) = n*(n+1)/2
*/
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(100));