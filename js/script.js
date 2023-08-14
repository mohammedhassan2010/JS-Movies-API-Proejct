const movieList = document.querySelector(".movie-list");
const popularMovies = document.querySelector(".popular-movies");

const trendingMovies = document.querySelector(".trending-movies");

const moreIcon = document.querySelector(".more-icon");
const subDropDown = document.querySelector(".sub-list");
const dropDownList = document.querySelector(".drop-down-ul");
const section = document.querySelector("section");
const body = document.querySelector(".movie-list");

moreIcon.addEventListener("mouseover", () => {
  subDropDown.style.display = "block";
  dropDownList.style.display = "block";
});
dropDownList.addEventListener("mouseleave", () => {
  subDropDown.style.display = "none";
});
