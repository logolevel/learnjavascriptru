function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var schedule = {};

console.log( isEmpty(schedule) );

schedule["8:30"] = "Wake up";

console.log( isEmpty(schedule) );