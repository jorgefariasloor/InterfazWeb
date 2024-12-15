// Seleccionar el formulario
const form = document.getElementById('contactForm');

// Agregar evento al enviar el formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío por defecto

    // Validar cada campo del formulario
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    if (!nombre.value) {
        nombre.classList.add('is-invalid');
    } else {
        nombre.classList.remove('is-invalid');
    }

    if (!correo.value || !correo.value.includes('@')) {
        correo.classList.add('is-invalid');
    } else {
        correo.classList.remove('is-invalid');
    }

    if (!mensaje.value) {
        mensaje.classList.add('is-invalid');
    } else {
        mensaje.classList.remove('is-invalid');
    }

    // Si todos los campos son válidos, muestra un mensaje de éxito
    if (nombre.value && correo.value.includes('@') && mensaje.value) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        form.reset(); // Reinicia el formulario
    }
});
