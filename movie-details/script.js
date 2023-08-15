const movieDetails = document.querySelector(".movie-details");
const searchParams = new URLSearchParams(window.location.search);
const movieId = searchParams.get("id");

async function getMovie() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f74237cdfddfad42cc312032905ed050`,
    );

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getMovie();
async function displayMovieList() {
  try {
    const movieData = [await getMovie()];

    movieData.map((movie) => {
      movieDetails.innerHTML = `
             
      <div class="movie-card-div"> 

    
      <div class="movie-card">
      
      
      <div class="movie-card-img">
      
      <img class="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
    <div>
    <h1 class="movie-title">${movie.title}</h1>
    <p class="movie-title">${movie.overview}</p>
    </div>
      </div>
      </div>
    
    
    </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
displayMovieList();
