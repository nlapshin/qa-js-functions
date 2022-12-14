/*const num1 = 2
const num2 = 3

const sumNumber = sumTwoNumber(num1, num2) // сложение двух чисел
const minusNumber = subtraction(num1, num2) 

console.log(sumNumber)
console.log(minusNumber)

// function - это специальное слово для обозначения функций
// sumTwoNumber - название
// a и b - это аргументы функции. Их для этой функции 2.
// {} - обрамление функции, где она начинается и заканчивается
// Тело функции return a + b
function sumTwoNumber(a, b) {
  return a + b
}

// Вычитает a из b. Самостоятельно.
function subtraction(a, b) { 
  return b - a 
}

/*
function auth(username, password) {
  // ... Выполняется код
}

function request(data) {
  // .. Выполняется запрос
}
*/

/*
// Должна возращать true, если username равен admin и
// password равен pass

const checkAuth = auth('admin1235', 'pass')

console.log('result', checkAuth)

function auth(username, password) {
  // username равен 'admin'?
  // === это строгое сравнение между переменными
  
  console.log(username === 'admin') // true или false
  // username === 'admin' И password === 'pass' &&
  // username === 'admin' ИЛИ username === 'boss' ||
  // username НЕ 'anonimys' !username

  if (username === 'admin' && password === 'pass') {
    return true
  } else {
    return false
  }
}
*/

// Функция auth - пускать всех, кроме anon

/*
console.log(auth2('admin')) // true
console.log(auth2('anon')) // false

console.log(!true) // false
console.log(!false) // true

// = - это присваивание
// == - это не строгое сравнение(с приведением типов)
// === - это строгое сравнение

console.log(1 == true) // true
console.log(1 === true) // false

function auth2(username) {
  // Сравниваем username с anon строкой
  // Результат записываем в переменную isAnon
  // isAnon - это boolean тип будет true или false
  const isAnon = username === 'anon' // boolean 

  if (!isAnon) {
    return true
  } else {
    return false
  }
}

// НЕ - !
// И - &&
// ИЛИ - ||

/*
if (<условие>) {
  // Код, который выполнится если условие верно
} else {
  // Код, который выполнится если условие не верно
}
*/

// Если 1 вернет слово 'привет', если 2 вернет слово 'пока'
// Если другое значение то вернет 'как дела'

/*
console.log(switchExample(1))
console.log(switchExample(2))
console.log(switchExample(3))
console.log(switchExample(100))


function switchExample(num) {
  switch(num) {
    // если num 1
    case 1:
      return 'привет'
    // если num 2
    case 2:
      return 'пока'
    // если num 3
    case 3:
      return 'число 3'
    // если num другое число
    default:
      return 'как дела'
  } 
}
*/
