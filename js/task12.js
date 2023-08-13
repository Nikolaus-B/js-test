/**
*? Напиши функцію конструктор User для 
*? створення користувача з такими властивостями:
*? a. userName - ім'я, рядок
*? b. age - вік, число
*? c. numbersOfPost - кількість постів, число
*? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

*? Додай метод getInfo(), який повертає рядок:
*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

 */

const User = function (userInfo) {
  const { userName, age, numbersOfPost } = userInfo;
  this.userName = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;
  this.getInfo = function () {
    const { userName, age, numbersOfPost } = this;
    console.log(
      `Користувачеві ${userName} ${age} років і в нього ${numbersOfPost} публікацій.`
    );
  };
};
const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
const mango = new User({ userName: "Mango", age: 33, numbersOfPost: 28 });
polly.getInfo();
mango.getInfo();
