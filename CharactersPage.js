$(document).ready(function() {

    const heroId = getParameter('heroId');
    const ts = "1"; 
    const publicKey = "15cea5f8a59b71e7d636187219977051";
    const hash = "62eb37bec60ace73acd483210bc3fc51";

    fetchHeroesDetails( heroId , ts , publicKey , hash); 

});

/* FUNCTIONS */

async function fetchHeroesDetails( heroId , ts , publicKey , hash ){

    const url = `https://gateway.marvel.com/v1/public/characters/${heroId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (data.code === 200) {
            
            const hero = data.data.results[0];

            $('.character_information_image').attr('src', `${hero.thumbnail.path}.${hero.thumbnail.extension}`);

            $('.character_information_text_title').text(hero.name);

            $('.character_information_text_description').text(hero.description);

            console.log(hero.comics.items);

            console.log(hero.series.items);

            $('#comics').html(fillAccordion('comics' , hero.comics.items));
            $('#events').html(fillAccordion('events', hero.events.items));
            $('#series').html(fillAccordion('series', hero.series.items));
            $('#stories').html(fillAccordion('stories', hero.stories.items));

            
            } else {
                console.error("API ERROR:", data.status);
            }
        } catch (error) {
            console.error("REQUEST ERROR:", error);
        }

}

function getParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param); 
}

function homePage(){
    window.location.href = 'home.html';  
};

function fillAccordion( type , comics ) {

    if (comics.length > 0) {
        return comics.map(item => item.name).join('<br>');
    } else {
        return (`No ${type} available`);
    }
}
  



