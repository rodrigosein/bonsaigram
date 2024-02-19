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


function redirectToFotos01RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/caliandra.html";
}

function redirectToFotos02RodrigoS() {
    window.location.href = "../pagina-fotos-rodrigos/buganvile.html";
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
