// ************************************************************************
// Lezione 3 - Funzioni
// ************************************************************************


// function log(valore){
//     //var valore="qualcosa";
//     console.log("#########################")
//     console.log("   "+valore+"    ")
//     console.log("#########################")
// }
// log(" ciao mondo")
// //---------------------------------------

// var log2 = function(valore){
    
//     console.log("#########################")
//     console.log("  log2 "+valore+"    ")
//     console.log("#########################")
// }
// log2(" ciao mondo")


// var somma = (a,b) => {
//     console.log("prima")
//     return a+b;
//     console.log("dopo")
// }

// console.log( somma(100,133) )

//  var log3 = (valore) => {
//      //-----------
//  }

// var log4 = (a,b ) => a+b;// (a,b ) => { return a+b };

// var incremento = num => num++;


// const numeri = [1, 3, 5, 12, 18, 21];


// console.log(numeri.map(x => x * 2)); 

// // Fare una funzione raddoppia_numeri che prenda i numeri 
// // da un Array
// // e li metta in un secondo array raddoppiati.
// // N.B. Usare un ciclo for

// console.log(raddoppia_array(numeri));

// function raddoppia_array(numeri){
//     const numeri_doppi = [];
    
//     for (let i = 0; i < numeri.length; i++) {
//         const element = numeri[i];
//         numeri_doppi.push(element * 2);
//     }
    
//     return numeri_doppi;
// }

// const array = ["totti", "ronaldo", "messi"];

// const array2 = array.map(
//    nome => nome[0].toUpperCase()+nome.slice(0)
// );
// console.log(array2);

// function calcola_eta(dataDiNascita){
// 	let dataCorrente = new Date();
// 	let annoCorrente = dataCorrente.getFullYear();
// 	let annoDiNascita = new Date(dataDiNascita).getFullYear();
// 	let eta = annoCorrente - annoDiNascita;
// 	return eta;
// }

// console.log(calcola_eta("2000-11-01"));

// var lancia_dadi = function (){
// 	// Math.random restituisce valori tra 0 e 0,99..
// 	let risultato = Math.floor(Math.random() * 6) + 1;
// 	return risultato;
// }

// console.log(lancia_dadi());


// function somma (a,b) {
//     return a+b;
// }