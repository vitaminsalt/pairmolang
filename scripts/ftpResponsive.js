var a = setInterval(function () {
    if (document.getElementById("responsive").style.display == "none") {

    } else if (document.getElementById("responsive").style.display == "inline-block") {
        waitlang();
    }
}, 10);
console.log(document.getElementById("responsive").style.display);
