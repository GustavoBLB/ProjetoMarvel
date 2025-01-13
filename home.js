$(document).ready(function() {
    $('.character_card').click(function() {
        const character = $(this).attr('id');
        window.open(`CharactersPage.html?hero=${character}`, '_blank');   
    });
});