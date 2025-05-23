document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        alert(`You clicked on ${planet.classList[1].toUpperCase()}!`);
    });
});
