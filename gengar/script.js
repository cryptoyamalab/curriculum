document.addEventListener('DOMContentLoaded', () => {
    const gengarBtn = document.getElementById('gengar-btn');
    const container = document.querySelector('.gengar-container');
    let isCursed = false;

    if (gengarBtn && container) {
        gengarBtn.addEventListener('click', () => {
            // Activar pulso fantasmal
            container.classList.remove('shadow-pulse');
            void container.offsetWidth; // Reflow
            container.classList.add('shadow-pulse');

            if (!isCursed) {
                gengarBtn.textContent = "👁️ Gengar emerged from the shadows! Curse active.";
                gengarBtn.style.backgroundColor = "#d11a42";
                gengarBtn.style.borderColor = "#ff3366";
                isCursed = true;
            } else {
                gengarBtn.textContent = "🔮 Gengar used Nightmare! Systems nominal.";
                gengarBtn.style.backgroundColor = "#4a2574";
                gengarBtn.style.borderColor = "#7b3fb5";
                isCursed = false;
            }
        });
    }
});
