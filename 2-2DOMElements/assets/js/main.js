console.log("test");

function sendValues() {
    const vorname = document.getElementById("vorname").value;
    const nachname = document.getElementById("nachname").value;
    const fullName = vorname + " " + nachname;
    const land = document.getElementById("land").value;
    console.log(vorname);
    console.log(nachname);
    console.log(land);
    console.log(`Full nam: ${fullName} Land: ${land}`);
}