// const menuListLink = document.querySelector('.menu_list_link');

// $(document).ready(function() {
// menuListLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.location.href = 'home.html';
//  });
// });

$(document).ready(function() {
    $('.menu_list_link').click(function() {
        event.preventDefault();

        window.location.href = 'home.html';  
    });
});

function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param); 
}

const hero = getQueryParameter('hero');



switch (hero) {
    case `wolverine`:
        $('.character_information_text_title').text('Wolverine');

        break;
    
    case `spiderman`:
        $('.character_information_text_title').text('spiderman');
        break;

    case `hulk`:

        break;

    case `ironman`:

        break;

    case `scarletwitch`:

        break;
}

