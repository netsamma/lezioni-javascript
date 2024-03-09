// ************************************************************************
// Lezione 4 - Oggetti: Literal e Costruttore
// ************************************************************************

// // Definisce un oggetto come una serie di coppie chiave-valore
// const book1 = {
// 	title: "Il deserto dei tartari",
// 	author: "Dino Buzzati",
// 	year: 1940,
// 	getSummary: function (){
// 		return `${this.title} è stato scritto da ${this.author} nel ${this.year}`
// 	}
// }
// console.log(book1.getSummary())


// Prende tutti i valori dell'oggetto
// console.log(Object.values(book1))


// Prende tutte le chiavi dell'oggetto
// console.log(Object.keys(book1))
// const book2 = {
// 	title: "Fattoria degli animali",
// 	author: "George Orwell",
// 	year: 1945,
// 	getSummary: function (){
// 		return `${this.title} è stato scritto da ${this.author} nel ${this.year}`
// 	}
// }


// const book3 = {
// 	title: "Il sogno di una notte di mezza estate",
// 	author: "William Shakespeare ",
// 	year: 1595,
// 	getSummary: function (){
// 		return `${this.title} è stato scritto da ${this.author} nel ${this.year}`
// 	}
// }


// ************************************************************************
// Oggetti Constructor
// ************************************************************************

// function Book(title, author, year){
// 	this.title = title;
// 	this.author = author;
// 	this.year = year;
// 	// this.getSummary = function(){
// 	// 	return `${this.title} è stato scritto da ${this.author} nel ${this.year}`
// 	// }
// }


// Book.prototype.getSummary = function() {
// 	return `${this.title} è stato scritto da ${this.author} nel ${this.year} _proto`
// }


// const book4 = new Book("Il Gattopardo","Giuseppe Tomasi di Lampedusa", 1958)
// console.log(book4.getSummary());


// ************************************************************************
// Ereditarietà oggetti
// ************************************************************************


// // Mediante prototype - senza metodi
// function Book(title, author, year){
// 	this.title = title;
// 	this.author = author;
// 	this.year = year;
// }

// function Magazine(title, author, year, month){
// 	Book.call(this, title, author, year)
// 	this.month = month;
// }

// const mag1 = new Magazine("Panorama", "Mondori", 2024, "Gennaio")
// console.log(mag1); 



// // Mediante prototype - con metodi

// function Book(title, author, year){
// 	this.title = title;
// 	this.author = author;
// 	this.year = year;
// }

// Book.prototype.getSummary = function() {
//     console.log('Redige mediante AI un riassunto del libro');
// }

// function Magazine(title, author, year, month) {
//     this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// Magazine.prototype.constructor = Magazine;

// const mag2 = new Magazine("Panorama", "Mondori", 2024, "Gennaio")
// console.log(mag2);



// // Mediante prototype - esempio Human e SuperHuman

// // Definizione dell'oggetto genitore Human
// function Human(name) {
//     this.name = name;
// }

// // Aggiunta del metodo eat() al prototipo del'oggetto Human
// Human.prototype.eat = function() {
//     console.log(`${this.name} is eating.`);
// };

// // Definizione della funzione figlia SuperHuman
// function SuperHuman(name) {
//     Human.call(this, name);
// }

 
// // Ereditarietà dei metodi dalla funzione genitore Human al prototipo della funzione figlia SuperHuman
// SuperHuman.prototype = Object.create(Human.prototype);

// // Aggiunta del metodo fly() al prototipo della funzione figlia SuperHuman
// SuperHuman.prototype.fly = function() {
//     console.log(this.name + " is flying.");
// };

// // Creazione di un'istanza della funzione figlia SuperHuman
// const hero = new SuperHuman("Superman");

// // Utilizzo dei metodi eat() e fly() sull'istanza della funzione figlia
// hero.eat(); // Output: Superman is eating.
// hero.fly(); // Output: Superman is flying.


// Mediante Class - esempio me e you

// class Person {
// 	talk (){
// 		return "talking...."
// 	}
// }

// const me = new Person()
// me.talk()

