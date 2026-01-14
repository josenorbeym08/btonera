// Script para personalización dinámina
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar más funcionalidades
    console.log('Botonera cargada correctamente');
});

// Función para copiar un enlace al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('¡Copiado al portapapeles!');
}

// Agregar evento a los botones si deseas
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Agregar animación de click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});
