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

//Fotos Rodrigo Souza

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
    window.location.href = "../pagina-fotos-rodrigos/buganvile.html";
}

function redirectToFotos03RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigos/buganvile2.html";
}

function redirectToFotos04RodrigoV() {
    window.location.href = "../pagina-fotos-rodrigos/jabuticabeira.html";
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
