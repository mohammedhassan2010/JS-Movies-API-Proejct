const movieDetails = document.querySelector(".movie-details");
const searchParams = new URLSearchParams(window.location.search);
const movieId = searchParams.get("id");

async function getMovie() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f74237cdfddfad42cc312032905ed050`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getActor() {
  try {
    const response1 = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f74237cdfddfad42cc312032905ed050`,
    );

    const data1 = await response1.json();

    return data1;
  } catch (error) {
    console.log(error);
  }
}
async function getTrailer() {
  try {
    const response2 = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f74237cdfddfad42cc312032905ed050`,
    );

    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.log(error);
  }
}
getTrailer();
async function displayMovieList() {
  try {
    const movieData = [await getMovie()];

    movieData.map((movie) => {
      movieDetails.innerHTML = `
             
      <div class="movie-card-div">
      <div class="book-mark">
          <h1 class="book-mark-icon">☆</h1>
          </div>
       
    
      <div class="movie-card">
    
      <div class="img-div">
      <img class="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
      </div>
    <div class="text-div">
    <div class="h1">
    <h1 class="movie-title">${movie.title}</h1>
    </div>
    <p class="movie-overview">${movie.overview}</p>
    </div>
    </div>
      </div>
    
    
      </div>
      `;
    });

    const actorData = [await getActor()];
    actorData.forEach((actor) => {
      movieDetails.innerHTML += `
      <div class="actor-div">
      <div>
      <h1 class="actor-name">${actor.cast[1].name}</h1>
      </div>
      <img class="actor-img" src="https://image.tmdb.org/t/p/w500/${actor.cast[1].profile_path}">
      </div>
      <div class="actor-div">
      <div>
      <h1 class="actor-name">${actor.cast[2].name}</h1>
      </div>
      <img class="actor-img" src="https://image.tmdb.org/t/p/w500/${actor.cast[2].profile_path}">
      </div>
      <div class="actor-div">
      <div>
      <h1 class="actor-name">${actor.cast[3].name}</h1>
      </div>
      <img class="actor-img" src="https://image.tmdb.org/t/p/w500/${actor.cast[3].profile_path}">
      </div>
      <div class="actor-div">
      <div>
      <h1 class="actor-name">${actor.cast[4].name}</h1>
      </div>
      <img class="actor-img" src="https://image.tmdb.org/t/p/w500/${actor.cast[4].profile_path}">
      </div>
      <div class="actor-div">
      <div>
      <h1 class="actor-name">${actor.cast[6].name}</h1>
      </div>
      <img class="actor-img" src="https://image.tmdb.org/t/p/w500/${actor.cast[6].profile_path}">
      </div>
      
        `;
    });

    const trailerData = [await getMovie()];

    trailerData.map((trailer) => {
      movieDetails.innerHTML += `
      <iframe src="https://www.youtube.com/watch?v=${trailer.key}" frameborder="0"></iframe>
             
      `;
    });
    movieDetails.innerHTML += `
    
    <h2 class="back">Back</h2>
    `;
    const backBtn = document.querySelector(".back");
    backBtn.addEventListener("click", (e) => {
      window.location.href = "../index.html";
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
