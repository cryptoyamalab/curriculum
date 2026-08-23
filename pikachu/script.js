document.addEventListener('DOMContentLoaded', () => {
    const pikachuBtn = document.getElementById('pikachu-btn');
    const container = document.querySelector('.pikachu-container');
    let isCharged = false;

    if (pikachuBtn && container) {
        pikachuBtn.addEventListener('click', () => {
            // Activar efecto de chispas en el contenedor
            container.classList.remove('electric-pulse');
            void container.offsetWidth; // Forzar reflow para reiniciar la animación CSS
            container.classList.add('electric-pulse');

            if (!isCharged) {
                pikachuBtn.textContent = "⚡ Pika-Pikachu! Voltage at 100,000V!";
                pikachuBtn.style.backgroundColor = "#fcd116";
                pikachuBtn.style.color = "#212121";
                isCharged = true;
            } else {
                pikachuBtn.textContent = "⚡ Use Volt Tackle!";
                pikachuBtn.style.backgroundColor = "#e3350d";
                pikachuBtn.style.color = "#ffffff";
                isCharged = false;
            }
        });
    }
});
