document.addEventListener("DOMContentLoaded", function() {
    let carrosseis = document.querySelectorAll(".carrossel");

    carrosseis.forEach(carrossel => {
        let imagens = carrossel.querySelectorAll("img");
        let index = 0;

        function trocarImagem() {
            imagens.forEach(img => img.style.display = "none");
            imagens[index].style.display = "block";
            index = (index + 1) % imagens.length;
        }

        setInterval(trocarImagem, 1000);
    });
});
