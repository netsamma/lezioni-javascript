//***************************************************************************
// Lezione 7 - DOM
//***************************************************************************

// // Aggiunta paragrafo al body della pagina HTML
// paragrafo2 = document.createElement("p");    
// textnode = document.createTextNode(`
//  Salve sono un paragrafo creato con l’utilizzo del DOM
// `); 
// paragrafo2.appendChild(textnode); 
// document.body.appendChild(paragrafo2);

// // Aggiunta elemento di una lista non ordinata al body della pagina HTML
// lista = document.createElement("ul");    
// li_node = document.createElement("li"); 
// textnode = document.createTextNode("Coffee"); 
// li_node.appendChild(textnode);   
// lista.appendChild(li_node);
// document.body.appendChild(lista);


//***************************************************************************
// Esercizio
//***************************************************************************
// Scrivi una funzione JavaScript che al click di un pulsante aggiunga una riga 
// ad una tabella html già presente nella pagina.

// Seleziona la tabella
var tabella = document.getElementById("tabella");

// Aggiunta di un event listener al pulsante
document.getElementById('table-button').addEventListener('click', aggiungiRiga);

function aggiungiRiga() {
  var tabella = document.getElementById('tabella1');
  var nuovaRiga = document.createElement('tr');
  var numCelle = 2;
  for (var i = 0; i < numCelle; i++) {
    var cella = document.createElement('td');
    cella.textContent = "X";
    nuovaRiga.appendChild(cella);
  }
  tabella.appendChild(nuovaRiga);
}


// // Soluzione 2
// function aggiungiRiga() {
//     // Seleziona la tabella
//     var tabella = document.getElementById("id_della_tua_tabella");
//     // Crea una nuova riga
//     var nuovaRiga = tabella.insertRow();
//     // Aggiungi il numero di celle desiderato e imposta il loro contenuto
//     var numCelle = 2; // Numero di celle per questa riga
//     for (var i = 0; i < numCelle; i++) {
//         // Crea una nuova cella
//         var cella = document.createElement("td");
//         // Aggiungi il testo desiderato
//         if (i === 0) {
//             cella.textContent = "Contenuto cella 1";
//         } else if (i === 1) {
//             cella.textContent = "Contenuto cella 2";
//         }
//         // Aggiungi la cella alla nuova riga
//         nuovaRiga.appendChild(cella);
//     }
// }

// // Soluzione 3
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

// items = document.getElementsByClassName("item")
// console.log(items);



//***************************************************************************
// Esercizio
//***************************************************************************
// Crea una lista di card contenenti i prodotti di un sito di e-commerce.
// Le card devono contenere un’immagine, un titolo, una descrizione e il prezzo.
// I dati devono provenire da un array di oggetti JSON.
// Le card devono essere disposte a griglia di 4 colonne separate da un margine.

const prodotti = [
  {
      "img": "img/immagine1.jpg",
      "titolo":"Scarpe Nike",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 130,
  },
  {
      "img": "img/immagine2.jpg",
      "titolo":"Scarpe Adidas",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 170,
  },   
  {
      "img": "img/immagine1.jpg",
      "titolo":"Scarpe Geox",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 160,
  },   
  {
      "img": "img/immagine2.jpg",
      "titolo":"Scarpe Reebok",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 100,
  },   
  {
      "img": "img/immagine2.jpg",
      "titolo":"Scarpe Nike",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 110,
  },   
  {
      "img": "img/immagine1.jpg",
      "titolo":"Scarpe Nike",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 190,
  },   
  {
      "img": "img/immagine1.jpg",
      "titolo":"Scarpe Nike",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 230,
  },   
  {
      "img": "img/immagine2.jpg",
      "titolo":"Scarpe Nike",
      "descrizione":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita? Explicabo, nobis recusandae? Exercitationem minus alias cum suscipit rerum atque, cumque voluptatibus incidunt vero provident deserunt aliquam nesciunt. Repudiandae, iusto.",
      "prezzo": 90,
  },
]

let grid_prodotti = document.getElementById("grid_prodotti")
let items = document.getElementsByClassName("prodotto")

// trasformiamo l'oggetto in Array con Array.from//
// console.log(Array.from(items)[0].innerHTML)

prodotti.forEach(element => {

  let div = document.createElement("div");

  let image = document.createElement("img")
  image.src = element.img // "img/immagine1.jpg"
  div.appendChild(image)

  div.classList.add("prodotto")
  let titolo = document.createTextNode(element.titolo)
  div.appendChild(titolo)

  let prezzo = document.createTextNode(element.prezzo)
  div.appendChild(prezzo)

  let par = document.createElement("p")
  let descrizione = document.createTextNode(element.descrizione)
  par.appendChild(descrizione)
  div.appendChild(par)

  grid_prodotti.appendChild(div)

});