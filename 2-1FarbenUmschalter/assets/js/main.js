console.log("test");

const heading = document.getElementsByTagName("h1");
const paragraph = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");

function grayAndBalck() {
    heading[0].style.color = "white";
    paragraph[0].style.color = "white";
    body[0].style.backgroundColor = "gray";
}

function whiteAndBlack() {
    heading[0].style.color = "black";
    paragraph[0].style.color = "black";
    body[0].style.backgroundColor = "white";
}

function blueAndWhite() {
    heading[0].style.color = "white";
    paragraph[0].style.color = "white";
    body[0].style.backgroundColor = "blue";
}

function yellowAndBlack() {
    heading[0].style.color = "black";
    paragraph[0].style.color = "black";
    body[0].style.backgroundColor = "yellow";
}