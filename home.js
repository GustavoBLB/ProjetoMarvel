$(document).ready(function() {

    const ts = "1"; 
    const publicKey = "15cea5f8a59b71e7d636187219977051";
    const hash = "62eb37bec60ace73acd483210bc3fc51";

    fetchHeroes(ts , publicKey , hash); 

});

/* FUNCTIONS */

async function fetchHeroes(ts , publicKey , hash) {

  const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.code   === 200)  {
        displayHeroes(data.data.results); 
        } else {
          console.error("API ERROR:", data.status);
        } 
    } catch (error) {
        console.error("REQUEST ERROR:", error);
    }
}

function displayHeroes(heroes) {

  const container = document.getElementById("hero_container");
  container.innerHTML = ""; 

  heroes.forEach(hero => {

      const card = `
      <div class="character_card" onclick="heroPage(${hero.id})">
        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
        <div class="character_card_content">
          <h1 class="character_card_content_title">${hero.name}</h1>
        </div>
      </div>
    `;
    container.innerHTML += card; 
  });
}

function heroPage(heroid){
  window.open(`CharactersPage.html?heroId=${heroid}`, '_blank');   
};