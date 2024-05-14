		// Menu.
        $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right'
        });
        
        $(document).ready(function() {
            // Agrega un evento de clic al enlace de las barras para abrir el menú
            $('[href="#menu"]').click(function(e) {
                e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                $('#menu').toggleClass('visible'); // Agrega o quita la clase 'visible' para mostrar u ocultar el menú
                
            });
        });