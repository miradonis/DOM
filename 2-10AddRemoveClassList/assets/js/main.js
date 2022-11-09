
const divBox = document.getElementById("element");
const heading = document.getElementsByTagName("h1");

function small () {
    divBox.classList.remove("middle");
    divBox.classList.remove("bigAndCrazy");
    divBox.classList.add("small");
}

function middle() {
    divBox.classList.remove("small");
    divBox.classList.remove("bigAndCrazy");
    divBox.classList.add("middle");
}

function bigAndCrazy() {
    divBox.classList.remove("middle");
    divBox.classList.remove("small");
    divBox.classList.add("bigAndCrazy");
    heading[0].style.transition = "all 3s";
}