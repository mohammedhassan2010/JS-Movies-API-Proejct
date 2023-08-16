const actorList = document.querySelector(".actor-list");

actorList.addEventListener("afterLoad", () => {
  actorList.textContent = "ffff";
});
async function getActor() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/872585/credits?api_key=f74237cdfddfad42cc312032905ed050",
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getActor1() {
  try {
    const response1 = await fetch(
      "https://api.themoviedb.org/3/movie/724209/credits?api_key=f74237cdfddfad42cc312032905ed050",
    );

    const data1 = await response1.json();

    return data1;
  } catch (error) {
    console.log(error);
  }
}

async function displayActorList() {
  try {
    const actorData = await getActor();
    const actorData1 = await getActor1();

    actorData.cast.map((actor) => {
      actorList.innerHTML += `
        
        <div class="actor-card-div"> 
  
        
          <div class="actor-card">
          
          
          <div class="actor-card-img">
          <a href="../actor-details/index.html?id=${actor.id}">
          <img  class="img" src="https://image.tmdb.org/t/p/w500/${actor.profile_path}" alt="">
          </a>
          <h1 class="actor-title">${actor.name}</h1>
          </div>
          </div>
        
        
        </div>
        `;
    });
    actorData1.cast.map((actor) => {
      actorList.innerHTML += `
        
        <div class="actor-card-div"> 
  
        
          <div class="actor-card">
          
          
          <div class="actor-card-img">
          <a href="../actor-details/index.html?id=${actor.id}">
          <img class="img" loading="lazy" src="https://image.tmdb.org/t/p/w500/${actor.profile_path}" alt="">
          </a>
          <h1 class="actor-title">${actor.name}</h1>
          </div>
          </div>
        
        
        </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
displayActorList();
