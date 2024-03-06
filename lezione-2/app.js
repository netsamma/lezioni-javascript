// **********************************
// Lezione 2 - Array
// **********************************

// const animali = ["Cane", "Gatto", "Cavallo"];

// Inserisce un elemento all'inizio dell'array
//animali.unshift("Canarino")

// Inserisce un elemento alla fine dell'array
//animali.push("Pappagallo")

// Elimina l'ultimo elemento inserito in un array
//animali.pop();

// console.log(animali);


// Attraversamento di un array - operazioni su tutt gli elementi
// Il ciclo dove i è l'indice dell'elemento che si sta analizzando
// animali[i] è l'iesimo elemento es: animali[0] = "Cane", animali[1] = "Gatto"

// for (i=0; i<animali.length; i++) {
// 	console.log(animali[i]);
// }

// oppure

// for (i in animali) {
// 	console.log(animali[i]);
// }

// // Funzione raddoppia numeri array con map e arrow function
// const numeri = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = numeri.map((x) => x * 2);
// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]


// // Funzione raddoppia numeri array con map e function esterna
// const numeri = [1, 4, 9, 16];
// const doppi = numeri.map(raddoppia);
// function raddoppia(numero){
//    return numero*2;
// }
// console.log(doppi); // [2, 8, 18, 32]


// // Funzione raddoppia numeri array con map e function anonima
// const array = [1, 4, 9, 16];
// const doppi = array.map(
// 	function(numero){
// 		return numero*2
// 	}
// );
// console.log(doppi);

// // Funzione raddoppia numeri array con forEach()
// const numeri = [1, 4, 9, 16];
// const doppi = [];
// numeri.forEach((numero) => {
// 	doppi.push(numero*2);
// });
// console.log(doppi);

// ******************************************************************
// ESERCIZIO -- Funzione raddoppia numeri array con ciclo for
// ******************************************************************

// function raddoppia(array) {
// 	for (let index = 1; index < array.length; index++) {
// 		const element = array[index];
// 	}
// }