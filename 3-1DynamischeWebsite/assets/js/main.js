// console.log("test");

const output = document.getElementById("demo");

const btn = document.querySelectorAll("button");
// console.log(btn);

const sliders = document.querySelectorAll("#sliders");
// console.log(inputs);

// globale variable für was auch immer
let count = 0;

// klick auf button ändert backgroundcolor von body
function changeBackground(color){
    document.body.style.background = color;
}


// regler ändert farbe
function changeHandle() {
    let sliderRed = Number(document.getElementById("rot").value);
    let sliderGreen = Number(document.getElementById("grun").value);
    let sliderBlue = Number(document.getElementById("blau").value);

    // body backgroundColor ändert sich
    document.body.style.backgroundColor = "rgb(" + sliderRed + "," + sliderGreen + "," + sliderBlue +")";

    // ausgabe von rgb-wert und hex-wert
    output.innerHTML = "rgb(" + sliderRed + "," + sliderGreen + "," + sliderBlue + ")" +" " + rgbToHex(sliderRed, sliderGreen, sliderBlue);

}


// umrechnung von rgb zu hex
function rgbToHex(r, g, b) {
    function c(v) {
        var hex = v.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    return "#" + c(r) + c(g) + c(b);
}