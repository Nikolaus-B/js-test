//  *? При завантаженні сторінки користувачеві пропонується
//   *? в prompt ввести число. Введення додається до значення
//   *? змінної total.
//   *? Операція введення числа триває до того часу,
//   *? поки користувач не натисне кнопку Cancel у prompt.
//   *? Після того як користувач припинив введення, натиснувши на
//   *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

//   *! Робити перевірку, що користувач ввів саме число,
//   *! а не довільний набір символів не потрібно.

let inputValue = prompt("Введите число");
let check = false;
let total = 0;
do {
  if (inputValue) {
    check = true;
    total += Number(inputValue);
    inputValue = prompt("Введите число");
  } else {
    check = false;
    alert(`Загальна сума введених чисел дорівнює ${total}.`);
  }
} while (check);
