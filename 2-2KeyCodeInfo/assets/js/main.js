

const userInput = document.getElementById("userInput");

userInput.addEventListener("keydown", pressed);

function pressed(event) {
    let keyCode = event.which;
    let code = event.code;
    let key = event.key;
    document.getElementById("output").innerHTML = keyCode;
    document.getElementById("outputCode").innerHTML = code;
    document.getElementById("key").innerHTML = key;
}