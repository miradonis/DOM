console.log("test");

let schalter = 1;

function myFunction() {
    const elements = document.querySelectorAll(".example");
    console.log(elements);
console.log(elements[0].style.backgroundColor);
    if (schalter === 1) {
            for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
        elements[i].style.color = "white";
        }
        schalter = 0;
    } else {
                for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
        elements[i].style.color = "black";
        }

        schalter = 1;
    }
    
}