
function truncate(str, maxlength) {
    if ( str.length > maxlength && maxlength >= 4 ) {
        return str.slice(0, maxlength -3) + '...';
    }
    return str;
}

console.log( truncate("github-logolevel/learnjavascriptru/structure-of-data/index.html", 15) );