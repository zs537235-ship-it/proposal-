/* =========================================================
                    PAGE SYSTEM
========================================================= */

let currentPage = 1;


function nextPage(pageNumber) {

    const current =
        document.getElementById("page" + currentPage);

    const next =
        document.getElementById("page" + pageNumber);


    if (!next) {
        return;
    }


    current.classList.remove("active");

    next.classList.add("active");


    currentPage = pageNumber;

}



/* =========================================================
                    FOOD SELECTION
========================================================= */

function selectFood(food) {

    const message =
        document.getElementById("foodMessage");


    message.innerHTML =
        "Perfect choice! " +
        food +
        " it is 😋❤️";


    setTimeout(function () {

        nextPage(4);

    }, 900);

}



/* =========================================================
                    DATE SELECTION
========================================================= */

function chooseDate(date) {

    const message =
        document.getElementById("dateMessage");


    message.innerHTML =
        "Awww... " +
        date +
        " sounds perfect ❤️";


    setTimeout(function () {

        nextPage(5);

    }, 900);

}



/* =========================================================
                    YES BUTTON
========================================================= */

function sayYes() {

    nextPage(7);

    createConfetti();

}



/* =========================================================
                    NO BUTTON
========================================================= */

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener(
    "mouseover",
    moveNoButton
);


noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);



function moveNoButton() {

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        20;


    const maxY =
        window.innerHeight -
        buttonHeight -
        20;


    const randomX =
        Math.max(
            10,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            10,
            Math.random() * maxY
        );


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}



/* =========================================================
                    CONFETTI
========================================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");


    const symbols = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💘",
        "✨",
        "🌸"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            (14 + Math.random() * 20) + "px";


        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        piece.style.animationDelay =
            Math.random() * 1.2 + "s";


        container.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 5000);

    }

}



/* =========================================================
                    RESTART
========================================================= */

function restartWebsite() {

    document
        .getElementById("page7")
        .classList.remove("active");


    document
        .getElementById("page1")
        .classList.add("active");


    currentPage = 1;


    noBtn.style.position = "";

    noBtn.style.left = "";

    noBtn.style.top = "";

}