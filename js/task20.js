// ЗАВДАННЯ 2
//   Використовуй prompt та повертай значення звідти.
//    - Створи функцію, усередині якої буде проміс.
//   Якщо значення не є числом, відхиляй проміс та логіруй "error".
//   Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
//   Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const userValue = prompt("Enter value");

function checkValue(value) {
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      reject("error");
    }
    if (value % 2 === 0) {
      setTimeout(() => {
        resolve("even");
      }, 1000);
    }
    setTimeout(() => {
      resolve("odd");
    }, 1000);
  });
}

checkValue(userValue).then(console.log).catch(console.log);
