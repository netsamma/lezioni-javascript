//***************************************************************************
// Lezione 7 - DOM
//***************************************************************************

// Aggiunta paragrafo al body della pagina HTML
paragrafo2 = document.createElement("p");    
textnode = document.createTextNode(`
 Salve sono un paragrafo creato con l’utilizzo del DOM
`); 
paragrafo2.appendChild(textnode); 
document.body.appendChild(paragrafo2);

// Aggiunta elemento di una lista non ordinata al body della pagina HTML
lista = document.createElement("ul");    
li_node = document.createElement("li"); 
textnode = document.createTextNode("Coffee"); 
li_node.appendChild(textnode);   
lista.appendChild(li_node);
document.body.appendChild(lista);


//***************************************************************************
// Esercizio
//***************************************************************************

// // Seleziona la tabella
// var tabella = document.getElementById("tabella");

// function aggiungiRiga(tabella) {
//     // Crea una nuova riga
//     var nuovaRiga = document.createElement("tr");

//     // Crea celle nella nuova riga e aggiungi il testo desiderato
//     var cella1 = document.createElement("td");
//     var cella2 = document.createElement("td");

//     cella1.textContent = "Contenuto cella 1";
//     cella2.textContent = "Contenuto cella 2";

//     // Aggiungi celle alla riga
//     nuovaRiga.appendChild(cella1);
//     nuovaRiga.appendChild(cella2);
      
//     // Aggiungi la nuova riga alla tabella
//     tabella.appendChild(nuovaRiga);
// }

// function applicaBordoTabella(tabella){
//     var celle = tabella.getElementsByTagName("td");
//     for (var j = 0; j < celle.length; j++) {
//         celle[j].style.border = "1px solid red"; // Cambia il colore del bordo in rosso
//     }
//     // Rimuovi lo spazio tra le celle della tabella
//     tabella.style.borderCollapse = "collapse";
// }

// aggiungiRiga(tabella);
// applicaBordoTabella(tabella);

// Fonti
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php
// https://www.donatantonio.net/blog/guide_tutorial/javascript/aggiungere-righe-a-tabella-in-maniera-dinamica/#google_vignette
// ChatGpt

items = document.getElementsByClassName("item")
console.log(items);
