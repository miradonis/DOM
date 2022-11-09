console.log("test");

const selectValue = document.getElementById("my-select");
console.log(selectValue);


selectValue.addEventListener("change", (event) => {
    const getValue = document.getElementById("option-selected").value;
    console.log(event.target.value);
    document.getElementById("option-selected").innerHTML = ("Sie haben ausgewählt: " + (event.target.value));
});