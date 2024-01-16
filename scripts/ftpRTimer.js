let g = 0;


let paused = new Audio('../audios/pause.mp3');
backMusic = new Audio('../audios/exbmusic.mp3');
backMusic.play();

function waitlang() {
    document.getElementById("harang").style.display = "inline-block";
    paused.play();
    backMusic.volume = .3;
}

function tuloyna() {
    document.getElementById("harang").style.display = "none";
    paused.play();
    backMusic.volume = 1;
}
