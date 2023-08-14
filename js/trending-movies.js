async function getMovie() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f74237cdfddfad42cc312032905ed050",
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

    movieData.results.map((movie) => {
      trendingMovies.innerHTML += `
        
        <div class="movie-card-div"> 
        <div class="book-mark">
        <h1 class="book-mark-icon">☆</h1>
        </div>
        
        <div class="movie-card">
        
        
        <div class="movie-card-img">
        <a href="movie-details/index.html?id=${movie.id}">
        <img class="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        </a>
        <h1 class="movie-title">${movie.title}</h1>
        </div>
        </div>
        
        
        </div>
        `;

      // ☆★
    });

    let bookmarkedItem;
    const bookMark = Array.from(document.querySelectorAll(".book-mark"));

    bookMark.forEach((item) => {
      item.addEventListener("click", () => {
        item.textContent = "★";

        bookmarkedItem = document.createElement("div");
        bookmarkedItem.classList.add("book-marked-item");
        bookmarkedItem.innerHTML = item.nextElementSibling.outerHTML;
        movieList.appendChild(bookmarkedItem);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
displayMovieList();
