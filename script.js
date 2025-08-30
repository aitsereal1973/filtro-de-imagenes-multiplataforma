const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
});

document.getElementById('bwFilter').addEventListener('click', () => {
    context.filter = 'grayscale(100%)';
    context.drawImage(canvas, 0, 0);
});

document.getElementById('sepiaFilter').addEventListener('click', () => {
    context.filter = 'sepia(100%)';
    context.drawImage(canvas, 0, 0);
});

document.getElementById('blurFilter').addEventListener('click', () => {
    context.filter = 'blur(5px)';
    context.drawImage(canvas, 0, 0);
});

document.getElementById('download').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'imagen_filtrada.png';
    link.href = canvas.toDataURL();
    link.click();
});