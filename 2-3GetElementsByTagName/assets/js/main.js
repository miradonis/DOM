const btnChangeMe = document.getElementById("navChange");
const tagName = document.getElementsByTagName("li");
const ul = document.getElementsByTagName("ul");
console.log(tagName);


function changeMe() {

    for (let i = 0; i < tagName.length; i++) {
        tagName[i].style.backgroundColor = "#f6c89f";
        i++;
        tagName[i].style.backgroundColor = "#ffe7d1";
        i++;
        tagName[i].style.backgroundColor = "#4b8e8d";
        i++;
        btnChangeMe.style.backgroundColor = "#396362";
        ul[0].style.backgroundColor = "#666";
    }
}