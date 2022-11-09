
const btnClickMe = document.getElementById("clickMe");

let anzahl = 0;
btnClickMe.addEventListener("click", () => {
        
        anzahl++;
        console.log(anzahl);
        document.getElementById("clickMe").innerHTML = "Click me: " +anzahl;
    
});