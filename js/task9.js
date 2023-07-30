// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат

const calculator = {
    read(a, b){
        this.val1 = a;
        this.val2 = b;
    },
    sum() {
        return this.val1 + this.val2
    },
    multiply() {
        return  this.val1 * this.val2
    }

}
calculator.read(2, 4);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.multiply());
