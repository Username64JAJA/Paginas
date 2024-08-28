window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    if (audio) {
        audio.volume = 0.5; // Ajusta el volumen si es necesario
        audio.play().catch(function(error) {
            console.error('Error al intentar reproducir el audio:', error);
        });
    }
});