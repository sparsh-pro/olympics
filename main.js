// Arrow functionality (scrolling effect for sports)
let currentSportIndex = 0;
const sportsContainer = document.getElementById("sports-container");

document.getElementById("next-sports").addEventListener("click", () => {
  if (currentSportIndex < cards.length - 1) {
    currentSportIndex++;
    sportsContainer.scrollTo({
      left: cards[currentSportIndex].offsetLeft,
      behavior: "smooth",
    });
  }
});

document.getElementById("prev-sports").addEventListener("click", () => {
  if (currentSportIndex > 0) {
    currentSportIndex--;
    sportsContainer.scrollTo({
      left: cards[currentSportIndex].offsetLeft,
      behavior: "smooth",
    });
  }
});