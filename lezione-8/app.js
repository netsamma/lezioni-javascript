
//***************************************************************************
// Lezione 8 - DOM - CSS
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
// Esercitazione 2 - Creazione del semplice gioco Emojii Fighter
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
})
