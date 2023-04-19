

//Animacion para pantalla de restaurantes
let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        setTimeout(function () {
            location.href = "../index.html";
        }, 1000);

        return false;
    });
});

//Animacion para index
let enlaces = document.querySelectorAll("a");

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (ev) {
        ev.preventDefault();
        
        let rutaRestaurante = enlace.href

        let content = document.querySelector('.content');

        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        setTimeout(function () {
            location.href = rutaRestaurante;
        }, 1000);

        return false;
    });
});