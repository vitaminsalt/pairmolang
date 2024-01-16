const cards = document.querySelectorAll('.game-card');
const pairedCards = document.querySelectorAll('.game-card.flip.correct');
let backMusic = new Audio('../audios/bmusic.mp3');
backMusic.play();
let r = 0;
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
            r += 1;
            poi += 24;
            console.log(firstCard.classList, secondCard.classList);
            resetBoard();
            console.log("i did the end one");
            backMusic.volume = 1;
        }, 300);
        if (pairs == 23) {
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
            r += 1;
            poi -= 6;
            backMusic.volume = 1;
        }, 600);
    }
    hasFlippedCard = false;
}

function shuffle() {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 26);
        card.style.order = randomOrder;
    });
}

function restartF() {
    window.location.reload(true);
}

cards.forEach(card => card.addEventListener('click', flipCard));
