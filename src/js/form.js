const formGroups = document.querySelectorAll(".card__form-group");
const form = document.querySelector(".card__form");
const ratingState = document.querySelector(".rating-state");
const cardWrapper = document.querySelector(".card__wrapper");
const selectedState = document.querySelector(".rating-state__selected");

function handlerGroupClicked(event) {
  for (let i = 0; i < formGroups.length; i++) {
    formGroups[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

formGroups.forEach((fg) => {
  fg.addEventListener("click", handlerGroupClicked);
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const selectedRating = e.target.elements.rating.value;
  const maxRating = e.target.elements.rating.length;

  if (selectedRating) {
    ratingState.classList.add("active");
    selectedState.textContent = `You selected ${selectedRating} out of ${maxRating}`;
    cardWrapper.style.height = cardWrapper.scrollHeight + "px";
    cardWrapper.classList.add("hidden");
  }
}
