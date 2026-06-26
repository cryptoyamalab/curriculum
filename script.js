document.addEventListener('DOMContentLoaded', () => {
    const snorlaxBtn = document.getElementById('snorlax-btn');
    
    snorlaxBtn.addEventListener('click', () => {
        snorlaxBtn.textContent = "Snorlax used Rest! CV Fully Charged.";
        snorlaxBtn.style.backgroundColor = "#1b363f";
        console.log("Snorlax template successfully initialized.");
    });
});