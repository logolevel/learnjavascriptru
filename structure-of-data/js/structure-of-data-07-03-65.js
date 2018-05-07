var style = ['Джаз', 'Блюз'];
console.log(style);

style.push('Рок-н-Ролл');
console.log(style);

var beforeLastElement = style.length - 2;
style[beforeLastElement] = 'Классика';
console.log(style);

alert( style.shift() );
console.log(style);

style.unshift('Рэп', 'Регги');
console.log(style);
