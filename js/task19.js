// ЗАВДАННЯ 1
//    Перероби функцію на промис таким чином, щоб промис повертав значення
//    через 2 секунди після виклику функції

function greet() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  }).then(console.log);
}

greet();
