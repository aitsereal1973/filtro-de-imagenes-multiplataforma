// Obtener los elementos del DOM
const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Listener para manejar la carga de una nueva imagen
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Ajustar el tamaño del lienzo a la imagen cargada
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        }
        img.src = e.target.result; // Establecer la fuente de la imagen a la URL leída
    }
    reader.readAsDataURL(file); // Leer el archivo como URL de datos
});

// Filtros de imagen
// Filtro en blanco y negro
document.getElementById('bwFilter').addEventListener('click', () => {
    // Aplicar filtro en blanco y negro
    context.filter = 'grayscale(100%)';
    context.drawImage(canvas, 0, 0);
});

// Filtro sepia
document.getElementById('sepiaFilter').addEventListener('click', () => {
    // Aplicar filtro sepia
    context.filter = 'sepia(100%)';
    context.drawImage(canvas, 0, 0);
});

// Filtro de desenfoque
document.getElementById('blurFilter').addEventListener('click', () => {
    // Aplicar filtro de desenfoque
    context.filter = 'blur(5px)';
    context.drawImage(canvas, 0, 0);
});

// Descargar la imagen filtrada
document.getElementById('download').addEventListener('click', () => {
    // Crear un enlace para descargar la imagen filtrada
    const link = document.createElement('a');
    link.download = 'imagen_filtrada.png';
    link.href = canvas.toDataURL();
    link.click(); // Hacer clic en el enlace para iniciar la descarga
});