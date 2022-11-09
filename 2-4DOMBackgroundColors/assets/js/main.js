
const btnChangeColor = document.getElementById("button");
const optionArr = document.getElementsByTagName("option");
console.log(optionArr);

const farbeAuswahl = document.getElementById("farbeAuswahlen");
console.log(farbeAuswahl);


btnChangeColor.addEventListener("click", (event) => {
    event.preventDefault();

    const index = farbeAuswahl.selectedIndex;
    console.log(index);

});