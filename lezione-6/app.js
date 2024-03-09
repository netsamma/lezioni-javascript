
// ****************************************************************
// Lezione 6 - Oggetti: Ereditarietà Binding this with callback
// ****************************************************************

// function Person(name) {
// 	this.name = name;
// 	console.log(this.name);
// 	setTimeout(function () {
// 	  console.log(this);
// 	}, 3000);
// }
   
// const me = new Person('Ignazio');

// function Human(name, birthDate) {
// 	this.name = name;
// 	this.birthDate = birthDate;
// 	this.eat = function (){
// 	   console.log("Sto mangiando")
// 	}
// }

// class SuperHuman extends Human{
// 	fly = function (){
// 	   console.log("Sto volando")
// 	}
// }

// let superman  = new SuperHuman;
// superman.fly()


// ****************************************************
// Oggetti: Destructuring
// ****************************************************

// const person = {
// 	name: 'John',
// 	age: 30,
// 	city: 'New York'
// };
  
// // Estrae i valori delle proprietà name e age dall'oggetto person
// const { name, age } = person;

// console.log(name); // Output: John
// console.log(age);  // Output: 30


// ****************************************************
// Array: Spread operator
// ****************************************************

// function sum(x, y, z) {
// 	return x + y + z;
// }
// const numbers = [1, 2, 3];
// // Passare gli elementi dell'array come parametri alla funzione sum utilizzando lo spread operator
// const result = sum(...numbers);
// console.log(result); // Output: 6


// const pets = ["Gatto", "Cane", "Pesce"];
// const carnivorous = ["Leone", "Tigre"];
// const animals = [pets,carnivorous];
// console.log(animals);

// const pets = ["Gatto", "Cane", "Pesce"];
// const carnivorous = ["Leone", "Tigre"];
// const animals = [...pets,...carnivorous];
// console.log(animals);

// let user = {firstName:"John", lastName:"Doe"};
// let hobbies = { hobby1: "singing", hobby2: "dancing" }
// let myInfo = {...user, ...hobbies};
// console.log(myInfo); //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}


// // Create a Set
// const letters = new Set(["a","b","c","c","a","b","b"]);
// console.log(letters)


// ****************************************************
// Oggetti: Ereditarietà mediante Classi
// ****************************************************

// Definizione della classe Person
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // Metodo della classe Person
//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     }
// }

// class SuperHuman extends Person {
//     constructor(name, age, superpower) {
//         // Chiamata al costruttore della classe genitore
//         super(name, age);
//         this.superpower = superpower;
//     }

//     // Metodo della classe SuperHuman
//     useSuperpower() {
//         return `I'm using my superpower: ${this.superpower}!`;
//     }
// }

// const superman = new SuperHuman("Clark", 30, "Volare");
// console.log(superman.age);