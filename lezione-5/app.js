// ****************************************************************
// Lezione 5 - Oggetti ed Array: Funzioni di modifica e lettura
// ****************************************************************

// Esercizio

// Dato un array di oggetti che rappresentano gli articoli in un carrello della spesa, 
// scrivi la funzione:
// sommaQuantitaArticolo (carrello, articolo)
// che accetti  i parametri carrello (l'array degli oggetti) e articolo (l’articolo specifico) 
// e che restituisca la somma delle quantità di quell'articolo.

function sommaQuantitaArticolo (carrello, nome_articolo){
    let somma = 0;
    for (let index = 0; index < carrello.length; index++) {
        const articolo = carrello[index];
        if (nome_articolo == articolo.nome) {
            somma += articolo.quantita;
        }
    }
    return somma;
}

var carrello = [
    { articolo: 'Mele', quantita: 3 },
    { articolo: 'Banane', quantita: 2 },
    { articolo: 'Mele', quantita: 5 },
    { articolo: 'Arance', quantita: 1 },
    { articolo: 'Mele', quantita: 2 },
    { articolo: 'Arance', quantita: 5 }
];

let nome = "Arance"
let somma = sommaQuantitaArticolo(carrello, nome);
console.log(`La somma delle ${nome} è: ${somma}` );




// Declaring class

class Profile {
   
    #name;
    #age;

    // Constructor of profile class
    constructor(name, age, username) {  
        this.#name = name;
        this.#age = age;
        this.username = username;
    }

    getName() {
        // Method to return name
        return this.#name;  
    }

    getAge() {
        // Method to return age
        return this.#age;  
    }

    getClass() {
        return this;
    }
}


const profile1 = new Profile("Marco", 23, "marco@gmail.com")

console.log(profile1.getName());

console.log(profile1.username);




// Class Student extends class Profile  
class Student extends Profile {  
     
    // Each data of class Profile can be
    // accessed from student class.
    constructor(name, age, username, languages) {

        // Acquiring of attributes of parent class
        super(name, age, username);  
        this.lang = [...languages, "ELement"];
        console.log( this.lang);
    }
 
    // Method to display all attributes
    getDetails() {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("Languages : " + this.lang);
    }
}



// Creating object of child class with passing of values
var student1 = new Student("Ankit Dholakia", 24, "marco24", ['Java', 'Python', 'PHP', 'JavaScript']);

console.log(student1);