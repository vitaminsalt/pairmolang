const cards = document.querySelectorAll('.game-card');
const pairedCards = document.querySelectorAll('.game-card.flip.correct');
let backMusic = new Audio('../audios/bmusic.mp3');

let r = 32;
let poi = 0;
let pairs = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = true;
        secondCard = this;

        console.log(firstCard, secondCard);

        confirmMatch();
    }
}


var ct = setInterval(function counter() {
    document.getElementById("orasan").innerHTML = r;
    document.getElementById("score").innerHTML = poi;
    document.getElementById("paused-moves").innerHTML = r;
    document.getElementById("paused-score").innerHTML = poi;
    document.getElementById("done-score").innerHTML = poi;
    document.getElementById("done-moves").innerHTML = r;


}, 100);

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function finishFunc() {
    document.getElementById("winner").style.display = "block";
    backMusic.pause();
    backMusic.currentTime = 0;
    let done = new Audio('../audios/finished.mp3');
    done.play();
    clearInterval(x);
}

function gameover() {
    document.getElementById("gameout").style.display = "inline-block";
    backMusic.pause();
    backMusic.currentTime = 0;
    backMusic.volume = 0;
    let oops = new Audio('../audios/gameover.mp3');
    oops.play();
    clearInterval(x);
}

function lightFunc() {
    setTimeout(() => {

        firstCard.classList.toggle('correct');
        secondCard.classList.toggle('correct');

    }, 100);
}

function wrFunc() {
    firstCard.classList.toggle('wrong');
    secondCard.classList.toggle('wrong');
}

function confirmMatch() {
    if (firstCard.dataset.framework == secondCard.dataset.framework) {
        console.log(firstCard.dataset.framework, secondCard.dataset.framework);
        var audio = new Audio('../audios/correct.mp3');
        audio.play();
        audio.volume = 1;
        backMusic.volume = .5;
        lightFunc();
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        console.log(firstCard.classList, secondCard.classList);
        setTimeout(() => {
            r -= 1;
            poi += 12;
            console.log(firstCard.classList, secondCard.classList);
            resetBoard();
            console.log("i did the end one");
            backMusic.volume = 1;
        }, 300);
        if (pairs == 7) {
            finishFunc();
            pairs += 1;
        } else {
            pairs += 1;
        }
    } else {
        var audio = new Audio('../audios/wrong.mp3');
        audio.play();
        audio.volume = 0.3;
        backMusic.volume = .5;
        wrFunc();
        setTimeout(() => {
            lockBoard = true;
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard.classList.remove('wrong');
            secondCard.classList.remove('wrong');
            resetBoard();
            r -= 1;
            poi -= 4;
            backMusic.volume = 1;
        }, 600);
    }
    hasFlippedCard = false;
    if (r == 1) {
        r -= 1;
        gameover();
    }
}

function shuffle() {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 26);
        card.style.order = randomOrder;
    });
}

function pickPic() {
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

function restartF() {
    window.location.reload(true);
}

cards.forEach(card => card.addEventListener('click', flipCard));
