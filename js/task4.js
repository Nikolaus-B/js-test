/////  *? За допомогою циклу for
//складіть усі парні числа від min до max

const max = 3;
const min = 0;
let totalAmount = 0;
for (let i = min; i < max; i++) {
  debugger;
  if (i % 2 === 0) {
    totalAmount += i;
  }
}
console.log(totalAmount);
