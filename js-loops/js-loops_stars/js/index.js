console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  for (let i = 1; i <= 6; i++) {
    const starImage = document.createElement("img");
    starImage.src = "assets/star-empty.svg";

    if (i <= filledStars) {
      starImage.src = "assets/star-filled.svg";
    } else {
      starImage.src = "assets/star-empty.svg";
    }
    starContainer.addEventListener("click",()=>)

    
  }
  starContainer.append(starImage);
}

//--^-- your code here --^--

renderStars(4);
