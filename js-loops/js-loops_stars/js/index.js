console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let index = 1; index < 6; index++) {
    const star = document.createElement("img");
    star.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(star);

    if (index <= filledStars) {
      star.setAttribute("src", "./assets/star-filled.svg");
    } else {
      star.setAttribute("src", "./assets/star-empty.svg");
    }

    star.addEventListener("click", () => {
      renderStars(index);
    });
  }

  //--^-- your code here --^--
}

renderStars();
