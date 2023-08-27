/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const buttonEl = document.querySelector("#passwordButton");
const inputEl = document.querySelector("#passwordInput");
buttonEl.addEventListener("click", hidePassword);
function hidePassword() {
  const inputTypeValue = inputEl.getAttribute("type");
  console.log(inputTypeValue);
  if (inputTypeValue === "text") {
    inputEl.setAttribute("type", "password");
    buttonEl.textContent = "Розкрити";
  } else {
    inputEl.setAttribute("type", "text");
    buttonEl.textContent = "Приховати";
  }
}
