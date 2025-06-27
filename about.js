const cards = document.querySelectorAll(".about .card");
const stagealFilter = document.querySelector("#stage");
const genreFilter = document.querySelector("#genre");

const noResultsMessage = document.querySelector(".no-results-message");

const currentFilters = {
  stage: "all",
  genre: "all",
};

cards.forEach((card, index) => {
  const cardId = `card-${index + 1}`;
  card.style.viewTransitionName = `band-${cardId}`;
});

stagealFilter.addEventListener("change", updateFilter);
genreFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filtergenre = e.target.name;

  currentFilters[filtergenre] = e.target.value;

  if (!document.startViewTransition) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const stage = card.querySelector("[data-stage]").dataset.stage;
    const genre = card.querySelector("[data-genre]").dataset.genre;

    if (
      (currentFilters.stage === "all" || currentFilters.stage === stage) &&
      (currentFilters.genre === "all" || currentFilters.genre === genre)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
  if (hasVisibleCards) {
    noResultsMessage.hidden = true;
  } else {
    noResultsMessage.hidden = false;
  }
}

function enableFiltering() {
  stagealFilter.hidden = false;
  genreFilter.hidden = false;
}

enableFiltering();
