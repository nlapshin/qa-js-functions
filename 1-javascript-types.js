// 200
// Либо codesandbox или nodeJS
// NodeJS у кого установлен?
// node -v в терминале

// Оцените свой уровень знания Javascript?
// 0 - не знаю совсем.
// 1 - знание типов, простых конструкций(if, for, while), функций, объектов.
// 5 - знаю что такое EventLoop

// План занятия:
// - Познакомимся с типами
// - Основные конструкции разберем
// - Функции
// - Объекты и массивы(следующая лекция)
// - Классы(совсем конец).

// Типы данных.
// Сколько типов данных есть? 8
// Есть 6 основных и 2 дополнительных.
// 6 из них 5 примитивных и 1 сложный.

// Основные типы:
// Undefined
// Null
// String
// Boolean
// Number(float, int, Infinite)
// Object(Array)

// Дополнительные:
// BigInt - большие числа
// Symbol - специальный тип, служебный тип.

// В чем разница undefined и null?
// define - это "определить", undefine(это "неопределить")
// undefined - неопределенный.

// console.log - при помощи неё можно отлаживать

// console.log('Hello, OTUS');
// 123 когда сделаете.
// node ./your-script.js
// node <путь до скрипта>


// Объявили переменную, но не определили.
// let variable; // undefined
// console.log(variable); // undefined

// let variableNull = null;
// console.log(variableNull); // null

// Переменные
// Лучше создавать переменные с понятным именем
// Создать переменную можно 3 способами
// var oldStyle - это старый задания переменных
// let changeVariable - это актуальный способ задания
// const constVariable - переменная константа

// let changeVariable = 'Значение'
// changeVariable = 'Новое значение'

// console.log('changeVariable', changeVariable);
// const constVariable = 'Константа'
// constVariable = 'Новое значение' // Assignment to constant variable.

// if (age < 18) {
//   let changeVariable // внутри блока доступна
//   var oldStyleVariable // можно получить доступ вне блока.
// }

// Нужна ли точка с запятой в конце?
// Javascript - динамическая типизация
// можно ставить, а можно не ставить.

// String
// let string1 = 'Строка';
// let string2 = "Строка";
// let string3 = `Это шаблонная строка ${string1}`;


// ``` - это где буква ё - шаблонная строка.
// str1 + str2 - нужно объеденить.

// let str1 = 'Просто строка'; // в str1 записали строку Просто строка
// let str2 = "123"; // в str2 записали строку фываыаваа
// let delimer = ' ';

// let oldStr = str1 + delimer + str2; // Мы объеденили строки при помощи операции сложения.
// let newStr = `${str1} ${str2}`; // Мы объеденили строки при помощи шаблонных строк

// let myName = 'Nik'; 
// let hello = `Hello ${myName}`;

// console.log(hello);
// 234 кто попробовал.

// let <название переменной> = <значение> - служебное
// = в программировании это знак присваивания

// CamelCase - это способ написания переменных myCamelString
// SnakeCase - это способ написания переменных my_snake_case

// Number

// Int - целочисленные 123
// Float - с плавающей точкой 123.456

// let num1 = 123
// let num2 = 234.1

// let subNum = num1 - num2 // это мы вычитаем

// NaN - Not a Number
// Infinite - это бесконечности

// Boolean - логический тип. Имеет два значение true и false

// let isTrue = true // истина
// let isFalse = false // ложно.

// Object и Array - не будем разбирать.

// let user = {
//   name: 'Nik',
//   age: 33
// } // Это объект


// Конструкции языка
// 1. Операции ветвления

// Мы хотим написать разную логику для пользователей у которых возраст меньше 18 и больше.

// if/else - если/то

// let age = 25

// // age < 18 - результат выполнения логический тип true или false

// // Если age < 18 // age < 18 - это условия или condition
// if (age < 18) {
//   console.log('Доступ запрещен')
// // В противном случае
// } else {
//   console.log('Доступ открыт')
// }

// Способы сравнение двух переменных
// == или ===
// == - это нестрого сравнение
// === - это строгое сравнение

// console.log(0 == false) // true
// console.log(1 == false) // false
// console.log(0 === false) // false
// console.log("abc" == 123) // не будет приводить.

// <= - меньше или равно, >= больше или равно

// for/while - циклы

// Мы хотим явно из строки сделать число

// let numStr = '123' 
// let num1 = +numStr // Преобразует из строки, число
// let num2 = Number(numStr) // Преобразует из строки, число

// let strNum = 100500
// let str1 = strNum.toString(); // Из числа сделать строку.
// let str2 = parseInt(strNum); // Из числа сделать строку, но отбросить дробную часть.
// let str3 = parseFloat(strNum); // Из числа сделать строку, не отбрасывая дробную часть.

// let sum = num1 + num2;
// let sumStr = str1 + str2;

// console.log(sum); // 246
// console.log(sumStr); // 100500100500

// проверить a не равно b
// ! - в логике символ НЕ
console.log(a !== b); // Не равно










// console.log('Hello OTUS!')

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
