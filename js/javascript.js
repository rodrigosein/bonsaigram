function redirectToProfilePage() {
    window.location.href = "./pagina-rodrigos/index.html";
}

function redirectToProfilePage2() {
    window.location.href = "./pagina-rodrigov/index.html";
}

function redirectToProfilePage3() {
    window.location.href = "./pagina-romulofv/index.html";
}

function redirectToProfilePage4() {
    window.location.href = "./pagina-romulov/index.html";
}

//fotos Rodrigo Souza
function redirectToFotos01RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/caliandra.html";
}

function redirectToFotos02RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/buganvile.html";
}

function redirectToFotos03RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/buganvile2.html";
}

function redirectToFotos04RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/jabuticabeira.html";
}

//Fotos Rodrigo Vilela

function redirectToFotos01RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/buganvile.html";
}

function redirectToFotos02RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/siriguela.html";
}

function redirectToFotos03RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/pitangueira.html";
}

function redirectToFotos04RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/carmonaCarol.html";
}

function redirectToFotos05RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/pitecoAdulto.html";
}

function redirectToFotos06RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/caliandraSpinosa.html";
}

function redirectToFotos07RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/ulmus.html";
}

function redirectToFotos08RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/pitecoJovem.html";
}

function redirectToFotos09RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/pitangueiraPre.html";
}

function redirectToFotos010RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/serissa.html";
}

function redirectToFotos011RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/aroeiraYamadori01.html";
}

function redirectToFotos012RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/aroeiraYamadori02.html";
}

function redirectToFotos013RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigov/serissaChinesa.html";
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Avançar para a próxima imagem quando o slideshow for clicado
document.querySelector('.slideshow-container').addEventListener('click', function() {
    showSlides();
});
