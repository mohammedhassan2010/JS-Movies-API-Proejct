async function getMovie() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=f74237cdfddfad42cc312032905ed050",
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayMovieList() {
  try {
    const movieData = await getMovie();
    const genreSubDrop = document.querySelector(".sub-drop-down-ul");

    movieData.genres.map((genre) => {
      genreSubDrop.innerHTML += `
      <a class="genre-a" href="../genre/index.html?id=${genre.id}">
      <li class="genre-list">${genre.name}</li>
      </a>
      `;

      // ☆★
    });
  } catch (error) {
    console.log(error);
  }
}
displayMovieList();

const dropDownLi = document.querySelector(".drop-down-li");
const subListDiv = document.querySelector(".sub-list-div");
const subDropDownUl = document.querySelector(".sub-drop-down-ul");

dropDownLi.addEventListener("click", () => {
  subListDiv.style.display = "block";
  subDropDownUl.style.display = "block";
});

subDropDownUl.addEventListener("mouseleave", () => {
  subListDiv.style.display = "none";
});
