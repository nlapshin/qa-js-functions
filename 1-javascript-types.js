console.log('Hello OTUS!')

// Введите в консоле
// node index.js

/*
nik@nik:~/projects/webinar/js-function$ node ./index.js 
Hello OTUS!
*/

// 1. String
// 2. Number(integer, float, double) 
// 3. Boolean
// 4. null
// 5. undefined
// 6. object(array)
// 7. BigInt * // 
// 8. Symbol *

// 1. String
// 'Строка' тип стринг
// 'б' тип стринг.
// Операция сложения.

/*
// Переменная.
const a = 'Строка 1'
let b = 'string 2'

// Устаревшее(Не ИСПОЛЬЗОВАТЬ!)
// var c = 'string 3'
// d = 'string 4'

console.log('a', a)
console.log('b', b)

b = 'Новая строка'

console.log('new b', b)

// Способы объявить переменную
// 1. Через const(нельзя менять)
// 2. Через let(можно менять)
// У объявленных переменных есть область видимости
*/

/*
const a = '1';
const b = '2';

const c = a + ' + ' + b // a + b
const template = `${a} - ${b}` // объединение строк через шаблон

// ` - буква ё на клавиатуре
// ${переменая} - ${} синтаксическая конструкция

console.log('c', c);
console.log('template', template)
*/

// Как из строки сделать число?

/*
const str = '123'
const number1 = +str // просто добавь плюс в начало
const number2 = Number(str) // создать число из строки

console.log(str)
console.log(number1)
console.log(number2)

const strFloat = '345.111' // хотим получить только целую часть

console.log(parseInt(strFloat)) // Оставит только целую часть
console.log(parseFloat(strFloat)) // Оставит всё
console.log(+strFloat) // Оставит всё

const strWrong = 'sadfb'

console.log(+strWrong) // NaN - Not a number
console.log(isNaN(+strWrong))
console.log(isNaN(number1))
*/

/*
const boolTrue = true
const boolFalse = false
// Два значения true - истина и false - ложь

// 4. null
// 5. undefined

// Чем отличается null и undefined

// undefined - не определено
// null - пусто

let a; // undefined
const b = null // null

console.log('a', a)
console.log('b', b)
*/

// object - это составной тип(не примитивный)

/*
const user = {
  name: 'Nik',
  age: 33
} // это объект
*/

// Комментарии
// это коментарий однострочный
/*
это
многострочный
комментарий
*/
