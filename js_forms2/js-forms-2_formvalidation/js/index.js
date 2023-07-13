// console.clear();

// const form = document.querySelector('[data-js="form"]');
// const checkbox = document.getElementById("terms-of-service");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   console.log(data);
//   if (!checkbox.checked) {
//     alert("Please agree to the terms and conditions.");
//   }
// });

console.clear();

const form = document.querySelector('[data-js="form"]');
const checkbox = document.getElementById("terms-of-service");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(formData);

  console.log(data);

  if (!checkbox.checked) {
    alert("Please agree to the terms and conditions.");
  }
});
