//  *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
//  *? яка приймає масив об'єктів та
//  *? рядок під назвою каменю.
//  *? Функція вважає та повертає загальну вартість каменів
//  *? з таким ім'ям, ціною та кількістю з об'єкта
//     * /

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 6 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 150, quantity: 100 },
];

function calcTotalPrice(stones, stonesName) {
    
    for (let stone of stones) {
        if (stonesName === stone.name) {
            return stone.price * stone.quantity
        }
    }
}

console.log(calcTotalPrice(stones, "Изумруд"))