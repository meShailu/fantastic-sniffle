console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkBtn = document.querySelector('[data-js="dark-mode-button"]');

const lightBtn = document.querySelector('[data-js="light-mode-button"]');

const toggleBtn = document.querySelector('[data-js="toggle-button"]');

darkBtn.addEventListener("click", function () {
  bodyElement.classList.add("dark");
});

lightBtn.addEventListener("click", function () {
  bodyElement.classList.remove("dark");
});
toggleBtn.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});
