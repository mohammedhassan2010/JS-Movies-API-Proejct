async function getMovie() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/569094/videos?api_key=f74237cdfddfad42cc312032905ed050",
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const latestTrailer = document.querySelector(".latest-trailer");
async function displayMovieList() {
  try {
    const movieData = await getMovie();

    console.log(movieData);

    movieData.results.map((movie) => {
      latestTrailer.innerHTML += `
          
          <div class="movie-card-div"> 
          <div class="book-mark">
          <h1 class="book-mark-icon">☆</h1>
          </div>
          
          <div class="movie-card">
          
          
          <div class="movie-card-img">
          <iframe src="https://youtu.be/wch9C68iaZc" frameborder="0"></iframe>
          </div>
          </div>
          
          
          </div>
          `;

      // ☆★
    });

    let bookmarkedItem;
    const bookMark = Array.from(document.querySelectorAll(".book-mark"));
    console.log(bookMark);
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
