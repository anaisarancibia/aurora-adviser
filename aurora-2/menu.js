document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleMenu.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('visible');
    });

    // Ocultar el menú al hacer clic en cualquier parte fuera del menú
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !toggleMenu.contains(e.target)) {
            menu.classList.remove('visible');
        }
    });
});
