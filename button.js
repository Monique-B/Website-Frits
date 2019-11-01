/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var i = 0;

function move() {// Een functie wordt aangemaakt en later uitgevoerd
    if (i === 0) {
        i = 1;
        var elem = document.getElementById("myBar"); // Deze code wordt uit de html gehaald met dezelfde ID
        var width = 0;
        var id = setInterval(frame, 10); // setInterval roept elke 10 milliseconden frame opnieuw aan. De methode setInterval blijft de functie aanroepen totdat clearInterval wordt aangeroepen of het venster wordt gesloten
        function frame() {
            if (width >= 100) {
                clearInterval(id); // De methode clearInterval wist een timerset met de methode setInterval. Is de width 100 of groter wordt setInterval gewist
                i = 0;
            }
            else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

// bron: W3Schools
