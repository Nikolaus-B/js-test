/**
 *? Напиши функцію конструктор Storage який створює об'єкти
 *? Для управління складом товарів.
 *? При виклику отримуватиме один агрумент - початковий масив товарів,
 *? і записувати їх у властивість items.
 *? Додай методи класу:
 *? getItems() - повертайте масив товарів
 *? addItems(item) - отримує новий товар та додає його до поточних
 *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
 */
// const storage = new Storage(["apple", "banana", "mango"]);

const Storage = function (elements) {
  this.items = elements;
};
Storage.prototype.getItem = function () {
  return this.items;
};
Storage.prototype.addItem = function (item) {
  this.items.push(item);
  return this.items;
};
Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index !== -1) this.items.splice(index, 1);
  return this.items;
};

const storage = new Storage(["apple", "banana", "mango"]);

console.log(storage.removeItem("apple"));
console.log(storage.removeItem("cherry"));
console.log(storage.addItem("pineapple"));
console.log(storage.addItem("lemon"));
console.log(storage.getItem());
