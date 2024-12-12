$(document).ready(function() {
    $('.character_card').click(function() {
        const character = $(this).data('character');
        window.open(`CharactersPage.html?hero=${character}`, '_blank');   
    });
});