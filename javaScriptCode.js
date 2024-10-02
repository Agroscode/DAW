// Selección del botón y el cuerpo del documento
const btnCambiarColor = document.getElementById('btnCambiarColor');
const body = document.body;

// Función para generar un color aleatorio
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Evento para cambiar el color de fondo al hacer clic en el botón
btnCambiarColor.addEventListener('click', function() {
    const colorAleatorio = generarColorAleatorio();
    body.style.backgroundColor = colorAleatorio;
});
