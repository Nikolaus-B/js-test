//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

const time = 65;
const hour = Math.floor(time / 60);
const modifyHour = String(hour).padStart(2, 0);
const minutes = time % 60
const midifyMinutes = String(minutes).padStart(2, 0);

console.log(`${modifyHour}:${midifyMinutes}`);
