// Función que se ejecuta al enviar el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que la página se recargue
    
    // Obtener valores de los campos de entrada
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const correo = document.querySelector('input[placeholder="Correo Electrónico"]').value;
    const mensaje = document.querySelector('textarea').value;

    // Validar campos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert(`Gracias ${nombre}, hemos recibido tu mensaje.`);
        this.reset();  // Reinicia el formulario
    }
});

// Función para alternar el botón de navegación en pantallas pequeñas
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const menu = document.querySelector('#navbarNav');
    menu.classList.toggle('show');
});
