$(document).ready(function() {
    
    $('.character_card').click(function() {
        const character = $(this).attr('id');
        window.open(`CharactersPage.html?hero=${character}`, '_blank');   
    });

    const ts = "1"; 
    const publicKey = "15cea5f8a59b71e7d636187219977051";
    const hash = "62eb37bec60ace73acd483210bc3fc51";

    async function fetchHeroes() {

        const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.code === 200) {
            console.log(data.data.results); 
            displayHeroes(data.data.results); 
            } else {
            console.error("Erro na API:", data.status);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    function displayHeroes(heroes) {

        const container = document.getElementById("hero-container");
        container.innerHTML = ""; 
    
        heroes.forEach(hero => {
        
        const card = `
            <div class="card">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
            <h3>${hero.name}</h3>
            <button onclick="goToHeroPage(${hero.id})">Ver mais</button>
            </div>
        `;
        container.innerHTML += card; 
        });
    }

    $('.character_card').click(function() {
        const character = $(this).attr('id');
        window.open(`CharactersPage.html?hero=${character}`, '_blank');   
    });


});