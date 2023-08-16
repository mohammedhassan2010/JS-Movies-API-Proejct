const actorDetails = document.querySelector(".actor-details");
const searchParams = new URLSearchParams(window.location.search);
const actorId = searchParams.get("id");

async function getActor() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=f74237cdfddfad42cc312032905ed050`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
async function displayMovieList() {
  try {
    const movieData = [await getActor()];

    movieData.map((actor) => {
      actorDetails.innerHTML = `
             
      <div class="actor-card-div">

       
    
      <div class="actor-card">
    
      <div class="img-div">
      <img class="img" src="https://image.tmdb.org/t/p/w500/${actor.profile_path}" alt="">
      </div>
    <div class="text-div">
    <h1 class="actor-name">name:${actor.name}</h1>
    <p class="actor-gender">gender:${actor.gender}</p>
    <p class="actor-title">popularity:${actor.popularity}</p>
    <p class="actor-overview">${actor.biography}</p>
    </div>
    </div>
      </div>
    
    
      </div>
      `;
    });

    actorDetails.innerHTML += `
    
    <h2 class="back">Back</h2>
    `;
    const backBtn = document.querySelector(".back");
    backBtn.addEventListener("click", (e) => {
      window.location.href = "../actors-page/index.html";
    });
  } catch (error) {
    console.log(error);
  }
}
displayMovieList();
