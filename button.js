/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function update() {
    // Een functie wordt aangemaakt en later uitgevoerd
    var element = document.getElementById("myprogressBar");
    //Deze code wordt uit de html gehaald met dezelfde ID
    var width = 1;
    var identity = setInterval(scene, 10);
    // setInterval roept elke 10 milliseconden frame opnieuw aan. De methode setInterval blijft de functie aanroepen totdat clearInterval wordt aangeroepen of het venster wordt gesloten
    function scene() {
        if (width >= 100) {
            clearInterval(identity);
            // De methode clearInterval wist een timerset met de methode setInterval. Is de width 100 of groter wordt setInterval gewist
        }
        else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

// bron: W3Schools, Geeksforgeeks

