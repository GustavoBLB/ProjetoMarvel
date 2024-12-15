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


function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param); 
}

const hero = getQueryParameter('hero');



switch (hero) {
    case `wolverine`:
        $('.character_information_image').attr('src', "https://rollingstone.com.br/media/uploads/img-1026415-wolverine1.jpg");
        $('.character_information_text_title').text('wolverine'.toUpperCase());
        break;
    
    case `spiderman`:
        $('.character_information_image').attr('src', "https://i.pinimg.com/originals/a0/50/1b/a0501b147aa2a79092494af88a53434d.jpg");
        $('.character_information_text_title').text('spider-man'.toUpperCase());
        break;

    case `hulk`:
        $('.character_information_image').attr('src', "https://t.ctcdn.com.br/5QP7nxWMJzKA8aWitNrsjWZKS50=/640x360/smart/i653073.jpeg");
        $('.character_information_text_title').text('hulk'.toUpperCase());
        break;

    case `ironman`:
        $('.character_information_image').attr('src', "https://i.pinimg.com/736x/9d/b3/a8/9db3a8156aae930919ca3869e1ed11ff.jpg");
        $('.character_information_text_title').text('iron-man'.toUpperCase());
        break;

    case `scarletwitch`:
        $('.character_information_image').attr('src', "https://freshcomics.s3.amazonaws.com/issue_covers/JAN160800.jpg");
        $('.character_information_text_title').text('scarlet witch'.toUpperCase());
        break;
}

});
