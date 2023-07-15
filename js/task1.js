//  Використовуючи функцію if...else,
//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"

// const officialName = "ECMAScript";

const askWindow = prompt("Яка офіційна назва JavaScript?").trim();
console.log(askWindow);

if (askWindow === "ECMAScript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
