alert( alert(1) && alert(2) );

/*
Ответ: 1, а затем undefined.

Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
Поэтому до правого alert дело не дойдёт, вычисления закончатся на левом.
*/