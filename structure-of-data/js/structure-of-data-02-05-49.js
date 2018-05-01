function getDecimal(num) {
    return num > 0 ? (num % 1) : (-num % 1);
}

alert(getDecimal(12.5)); // 0.5
alert(getDecimal(1.2)); // 0.19999999999999996
