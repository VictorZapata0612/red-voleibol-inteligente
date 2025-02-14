document.addEventListener("DOMContentLoaded", function() {
    // Animación de las secciones al hacer scroll
    const cards = document.querySelectorAll('.info-card');

    function revealCards() {
        cards.forEach(card => {
            const position = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Ejecutar en carga inicial

    // Datos simulados en consola (para pruebas)
    console.log("Simulación de datos en tiempo real:");
    console.log({
        velocidadImpacto: "7.8 m/s",
        fuerzaGolpe: "12.4 N",
        tiempoContacto: "0.35 s"
    });
});
