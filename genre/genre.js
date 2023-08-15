const genreMovie = document.querySelector(".genre-movie");
const searchParams = new URLSearchParams(window.location.search);
const genreId = searchParams.get("id");

async function getMoviesByGenre() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f74237cdfddfad42cc312032905ed050&with_genres=${genreId}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function displayMovieList() {
  try {
    const movies = await getMoviesByGenre();

    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card-div");
      movieCard.innerHTML = `
        <div class="movie-card">
          <div class="movie-card-img">
            <a href="../movie-details/index.html?id=${movie.id}">
              <img class="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
            </a>
            <h1 class="movie-title">${movie.title}</h1>
          </div>
        </div>
      `;

      genreMovie.appendChild(movieCard);
    });
  } catch (error) {
    console.log(error);
  }
}

displayMovieList();
