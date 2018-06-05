var arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.sort(randomNumbers);

function randomNumbers(a, b) {
    return Math.random() - 0.5;
}

console.log(arr);