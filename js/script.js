const movieList = document.querySelector(".movie-list");
const popularMovies = document.querySelector(".popular-movies");

const trendingMovies = document.querySelector(".trending-movies");

const moreIcon = document.querySelector(".more-icon");
const subDropDown = document.querySelector(".sub-list");
const dropDownList = document.querySelector(".drop-down-ul");

moreIcon.addEventListener("mouseover", () => {
  subDropDown.style.display = "block";
  dropDownList.style.display = "block";
});
dropDownList.addEventListener("mouseleave", () => {
  subDropDown.style.display = "none";
});

function searchFunc() {
  const input = document.querySelector(".search-input");
  const filter = input.value.toLowerCase();
  const results = document.getElementsByClassName("movie-title");

  for (let i = 0; i < results.length; i++) {
    const listItem = results[i].parentElement.parentElement.parentElement;

    if (results[i].textContent.toLowerCase().includes(filter)) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }
}
