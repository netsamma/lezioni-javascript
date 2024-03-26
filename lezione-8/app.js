
//***************************************************************************
// Lezione 8 - DOM - CSS - Eventi e Event handler
//***************************************************************************


// --------------------------------------------------------------------------
// Esercitazione 1 - definizione funzioni cambio colore elementi DOM
// --------------------------------------------------------------------------

// function changeColorById(id, colore) {
// 	let elemento = document.getElementById(id);
// 	elemento.style.color = colore;
// }

// function changeColorByTagName(tagName, color) {
//     var elements = document.getElementsByTagName(tagName); // Seleziona tutti gli elementi con il tag specificato
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.color = color; // Modifica il colore del testo di ogni elemento
//     }
// }

// // Esempio di utilizzo per cambiare il colore di tutti gli elementi <p> in rosso
// changeColorByTagName('p', 'red');

// // Esempio di utilizzo per cambiare il colore dell'elemento con id="giorgio" in rosso
// changeColorById("4", "green");



// --------------------------------------------------------------------------
// Esercitazione 2 - Gestione dell'evento onmouseover e onmouseout
// --------------------------------------------------------------------------
// Scrivere il codice JS che faccia diventare verde un DIV al passaggio del mouse
// e cancelli il colore non appena il mouse esce dal DIV  

// document.getElementById("miodiv2").addEventListener('mouseover', function(){
//     changeColor("green", "miodiv2")
// })
// document.getElementById("miodiv2").addEventListener('mouseout', function(){
//     changeColor("", "miodiv2")
// })

// function changeColor(color, id){
//     document.getElementById(id).style.background = color
// }



// --------------------------------------------------------------------------
// Esercitazione 3 - Gestione dell'evento onclick su un pulsante
// --------------------------------------------------------------------------
// Scrivere il codice JS che faccia comparire un messaggio su un alert() 
// al click di un pulsante già presente nella pagina HTML
// Scrivere la stessa funzione che accetti il msg come parametro nell'alert()

// document.getElementById("butt1").addEventListener('click', mostraMessaggioCB)

// document.getElementById("butt2").addEventListener('click', function (){
//     var messaggio = "Ciao dalla callback CON parametro"
//     mostraMessaggioCBParametro(messaggio)
// })

// function mostraMessaggio(messaggio){
//     alert(messaggio)
// }

// function mostraMessaggioCB(){
//     alert("Ciao dalla callback SENZA parametro")
// }

// function mostraMessaggioCBParametro(messaggio){
//     alert(messaggio)
// }



// --------------------------------------------------------------------------
// Esercitazione 4 - Al click di un bottone, mostra errore su un <p>
// --------------------------------------------------------------------------
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// console.log(document.querySelector("button"));
// document.querySelector("button").addEventListener("click", function(){
//     document.getElementById("error").innerHTML = "Something went wrong, please try again"
// })




// --------------------------------------------------------------------------
// Esercitazione 5 - Al click di una cella illumina colorandola di giallo
// --------------------------------------------------------------------------

// -----------
// Versione 1
// -----------

// // Get the table element
// var table = document.getElementById("tabella1");
// // Get all the cells in the table
// var cells = table.getElementsByTagName("td");
// // Loop through all cells and add click event listener
// for (var i = 0; i < cells.length; i++) {
//    cells[i].addEventListener("click", illuminadiimmenso);
// }

// function illuminadiimmenso(){
//     // Remove any previously highlighted cells
//     var highlightedCells = table.getElementsByClassName("highlight");
//     for (var j = 0; j < highlightedCells.length; j++) {
//         highlightedCells[j].classList.remove("highlight");
//     }
//     // Highlight the clicked cell
//     this.classList.add("highlight");
// }

// -----------
// Versione 2
// -----------

var table = document.getElementById("tabella1");

table.addEventListener('click', function(event){
    if (event.target.tagName === "TD") {
        // Remove any previously highlighted cells
        var highlightedCells = table.getElementsByClassName("highlight");
        for (var j = 0; j < highlightedCells.length; j++) {
            highlightedCells[j].classList.remove("highlight");
        }
        // Highlight the clicked cell
        event.target.classList.add("highlight");
    }
})





// --------------------------------------------------------------------------
// Esercitazione 6 - Creazione del semplice gioco Emojii Fighter
// --------------------------------------------------------------------------
// Crea il gioco Emojii Fighter in cui, al click di un bottone, 
// prendete due figure random presenti nell'array fighters 
// come immagini (sono state copiate e incollate da un sito di Emoji)
// e mostratele una di fronte l'altro con la scritta VS in mezzo 

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fight")
fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    //************************************************************************
    // Modo 1
    //************************************************************************

    // // Puliamo lo stage del gioco
    // while(stageEl.hasChildNodes() ){
    //     stageEl.removeChild(stageEl.lastChild);
    // }

    // // Piazziamo i due emojii e la scritta vs
    // let emoj1 = document.createTextNode(fighters[0])
    // let vs = document.createTextNode(" Vs ")
    // let emoj2 = document.createTextNode(fighters[1])
    // stageEl.appendChild(emoj1)
    // stageEl.appendChild(vs)
    // stageEl.appendChild(emoj2)

    //************************************************************************
    // Modo 2
    //************************************************************************

    // Scegliamo due immagini random tra le 16
    let sx = fighters[Math.floor(Math.random()*16)]
    let dx = fighters[Math.floor(Math.random()*16)]

    // Scriviamo un template HTML e lo sostituiamo all'innerHtml del DIV stage
    html = `${sx} Vs ${dx}`
    stageEl.innerHTML = html

})










// --------------------------------------------------------------------------
// Esercitazione 6 - Eventi Tastiera - Conversione Celsius Fahrenheit 
// --------------------------------------------------------------------------
// document.getElementById("celsius").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         let celsius =  document.getElementById("celsius").value;
//         // let celsius = event.target.value
//         let fahrenheit =  convertCelsiusToFahrenheit(celsius);
//         document.getElementById("fahrenheit").innerHTML = fahrenheit;
//     }
//  });
 
// function convertCelsiusToFahrenheit(celsius) {
//     var fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }
