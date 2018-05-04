"use strict"

var salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250,
};

var max = 0,
    name = "";
for ( var key in salaries ) {
    if ( salaries[key] > max ) {
        max = salaries[key];
        name = key;
    }
}

if (max > 0) {
    console.log(name + " has the biggest salary " + max + "$");
} else {
    console.log("Empty object");
}