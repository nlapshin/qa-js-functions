// Циклы - если что-то нужно сделать несколько раз

// 1. Написали первую программу
// 2. Прошли типы
// 3. Познакомились с функциями
// 4. Познакомились с if-else и switch.

// import - подключить 
// что подключить
// from 'node:assert'

// первый аргумент - это результат выполнения
// второй аргумент - это ожидаемое значение
// assert.equal(sum(2, 2), 4) // Я утверждают, что sum(2, 2) равен 4
// assert - это встроенный пакет для создания утверждений

// Два типа модулей commonjs и ecmascriptjs
// Это файл с конфигурацией проекта на nodejs

// import { strict as assert } from 'assert';

// assert.equal(sum(2, 2), 4)

// function sum(a, b) {
//   return a + b
// }

// Создайте файл package.json если ошибка Cannot use import statement outside a module (

import { strict as assert } from 'assert'; 

assert.equal(sum(2, 2), 4) 
assert.equal(sum(2, 3), 4)

console.log('it is work!')

function sum(a, b) { 
  return a + b 
} 

// npm init - создаем наш nodejs
// мы хотим подключать зависимости в наш проект
// npm test - запустим скрипт для тестов


/*
node:internal/process/esm_loader:94
    internalBinding('errors').triggerUncaughtException(
                              ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

5 !== 4

    at file:///home/nik/projects/webinar/js-function/3-assert.js:33:10
    at ModuleJob.run (node:internal/modules/esm/module_job:197:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 5,
  expected: 4,
  operator: 'strictEqual'
}

*/
