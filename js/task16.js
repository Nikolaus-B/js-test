/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/


const button = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');

button.addEventListener('click', handleSwapMe(input));

function handleSwapMe(eventInput) {
    // const A = 10;

    return function () {
      const inputValue = eventInput.value;
    
        !inputValue.trim() ? alert('Please tipe something!') : console.log(inputValue);  
        
        // console.log(A)
    }
    
}
// const fn = handleSwapMe(input);
// console.log(fn);
// fn();



/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const buttonSwap = document.querySelector('#swapButton');
const leftSwapInput = document.querySelector('#leftSwapInput');
const rightSwapInput = document.querySelector('#rightSwapInput');

buttonSwap.addEventListener('click', swapFn);

function swapFn() {
    const leftInputValue = leftSwapInput.value;
    const rightInputValue = rightSwapInput.value;
    leftSwapInput.value = rightInputValue;
    rightSwapInput.value = leftInputValue;
}