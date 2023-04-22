const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const mensajecargando = document.getElementById('mensajecargando');



const muteButton = document.getElementById("mute-button");

muteButton.addEventListener("click", function () {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteButton.innerHTML = '<i class="fa fa-volume-up"></i>';
    } else {
        videoPlayer.muted = true;
        muteButton.innerHTML = '<i class="fa fa-volume-off"></i>';
    }
});


playBtn.addEventListener('click', () => {
    videoPlayer.play();
});

stopBtn.addEventListener('click', () => {
    videoPlayer.pause();
});

volumeSlider.addEventListener("input", function () {
    videoPlayer.volume = volumeSlider.value;
});


videoPlayer.addEventListener('loadedmetadata', () => {
    mensajecargando.style.display = 'none';
});

videoPlayer.addEventListener('error', () => {
    alert('Oops!...Ha ocurrido un error al cargar el vídeo.');
});

function loadVideo(file) {
    if (!file.type.match('video/mp4')) {
        alert('El archivo no tiene el formato MP4.');
        return;
    }
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
    mensajecargando.style.display = 'block';

    videoPlayer.addEventListener('canplaythrough', () => {
        mensajecargando.style.display = 'none';
        videoPlayer.play();
    }, { once: true });
}
