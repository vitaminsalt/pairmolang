let g = 1500;

let x = setInterval(timeFunc, 100);
let paused = new Audio('../audios/pause.mp3');
backMusic = new Audio('../audios/bmusic.mp3');

function waitlang() {
    document.getElementById("harang").style.display = "inline-block";
    paused.play();
    backMusic.volume = .3;
    clearInterval(x);
}

function tuloyna() {
    document.getElementById("harang").style.display = "none";
    paused.play();
    backMusic.volume = 1;
    x = setInterval(timeFunc, 100);
}

function pickPic() {

    backMusic.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    backMusic.play();
    let picNum = Math.floor(Math.random() * 12);
    console.log(picNum);



    if (picNum == 1 || picNum == 0) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backone.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backone.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backone.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backone.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backone.png)";

    } else if (picNum == 2) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backtwo.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backtwo.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backtwo.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backtwo.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backtwo.png)";
    } else if (picNum == 3) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backthree.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backthree.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backthree.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backthree.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backthree.png)";
    } else if (picNum == 4) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backfour.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backfour.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backfour.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backfour.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backfour.png)";
    } else if (picNum == 5) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backfive.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backfive.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backfive.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backfive.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backfive.png)";
    } else if (picNum == 6) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backsix.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backsix.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backsix.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backsix.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backsix.png)";
    } else if (picNum == 7) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backseven.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backseven.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backseven.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backseven.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backseven.png)";
    } else if (picNum == 8) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backeight.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backeight.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backeight.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backeight.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backeight.png)";
    } else if (picNum == 9) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backnine.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backnine.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backnine.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backnine.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backnine.png)";
    } else if (picNum == 10) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backten.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backten.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backten.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backten.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backten.png)";
    } else if (picNum == 11) {
        document.getElementById("harang").style.backgroundImage = "url(../images/backeleven.png)";
        document.getElementById("winner").style.backgroundImage = "url(../images/backeleven.png)";
        document.getElementById("ooh").style.backgroundImage = "url(../images/backeleven.png)";
        document.getElementById("responsive").style.backgroundImage = "url(../images/backeleven.png)";
        document.getElementById("gameout").style.backgroundImage = "url(../images/backeleven.png)";
    }
    console.log(document.getElementById("harang").style.backgroundImage);
}


function timeFunc() {
    if (g == 0) {
        gameover();
    } else {
        var y = new Date();
        var i = y.setSeconds(g);
        var milli = g % 10;
        var sec = Math.floor(g / 10);
        var min = Math.floor(sec / 60);

        g--;
        if (sec >= 60) {
            var ser = Math.floor(sec / 60);
            ser *= 60;
            sec = sec - ser;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

    }
    if (min == 0) {
        document.getElementById("clock").innerHTML = sec + "." + milli;
        document.getElementById("paused-time").innerHTML = sec + "." + milli;
        document.getElementById("done-time").innerHTML = sec + "." + milli;
    } else {
        document.getElementById("clock").innerHTML = min + ':' + sec;
        document.getElementById("paused-time").innerHTML = min + ':' + sec;
        document.getElementById("done-time").innerHTML = min + ':' + sec;
    }

    if (g < 100) {
        document.getElementById("clock").style.backgroundColor = "red";
        document.getElementById("clock").style.color = "white";
    } else {
        document.getElementById("clock").style.backgroundColor = "none";
        document.getElementById("clock").style.color = "black";
    }
}
