
// Variables
// Rules for naming Variables : 
// 1) Cannot be a reserved keyword. 
// 2) Should be a meaningful name. 
// 3) Cannot start with a number. 
// 4) Cannot contain a space or hyphen (-)
// 4) Must use camelCase. EXCEPTION(* Objects use PascalCase instead).

// * const should be used when value of variable is permanent.
// * let should be used when value of variable is dynamic and can change.

// const name = "Tiago";
// let age = 22;
// let creditScore = 720;



// console.log(name, age, creditScore);

// Primitive or Value Types vs Reference Types
// Primitive : Strings, Numbers, Booleans, Undefined, and null.

// const name2 = "Sam"; // String Literal.
// let age2 = 18; // Number Literal.
// let isApproved = false; // Boolean literal.
// let firstName; // Undefined literal. Can also appear as firstName = undefined;.
// let selectedColor = null; // Null literal.

// Dynamic Typing : 
// in a Statically-Typed programming language, a value of a variable, once assigned, cannot be changed.
// The type of variable is decided by the value, at the moment of runtime.

// Reference : Objects, Arrays, and Functions.

// Objects : Stores the value of multiple related variables.
// Examples :

//  let person = {
//      name : "Dustin",
//      age : 22
//  }

// Dot Notation -- Concise, Shorter, More common Approach.
// person.name = "Jon";

// Bracket Notation
// person['name'] = 'Mary';

// console.log(person.name);

// // Arrays : Stores a list of strings, integers, or values.

// //let selectedColors = []; // Array Literal.
// let selectedColors = ['red', 'green', 'yellow', 'blue'];
// //Adding elements to the array.
// selectedColors[4] = 'purple';
// console.log(selectedColors.length);
// console.log(selectedColors);

// Functions : a set of statements, performs a task, or returns a value.

// ES6 Functions:
// function greet(person) {
//     console.log('Hello ' + person.name);
//     // No need for ; at the end of function declaration.
// }
//  greet(person);

//  ES7 Arrow Functions : without function keyword , has a global scope.

//  Variable Assignment replaces the function keyword.
//  let greet2 = (person) => {
//     console.log('Hello ' + person.name);
//  }
//  greet2(person);

//     Anonymous Functions:
// document.addEventListener('click', function() {
//     console.log('Click')
// })
//     // *** Best Practice *** 
// document.addEventListener('click', () => console.log('Click'))


// *** *** *** CodeWARS KATA *** *** *** 

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1: { 
//           name = 'Mercury'
//           break;
//       }
//       case 2: {
//           name = 'Venus'
//           break;
//       }
      
//       case 3: {
//           name = 'Earth'
//           break;
//       }
//       case 4: {
//           name = 'Mars'
//           break;
//       }
//       case 5: {
//           name = 'Jupiter'
//           break;
//       }
//       case 6: {
//           name = 'Saturn'
//           break;
//       }
//       case 7: {
//           name = 'Uranus'
//           break;
//       }
//       case 8: {
//           name = 'Neptune'
//           break;
//       }
//     }
    
//     return name;
//   }
//   console.log(getPlanetName(3));



// let getEvenOrOdd = (number) => {
//      let result = number % 2 == 0 ? "Even" : "Odd" ;
//       return result;
//     }
// console.log(getEvenOrOdd(4));



// let getDivisorsCnt = (n) =>  {
//     let divisors = 0;
//       for (let i = 1; i <= n; i++) {
//           if (n % i == 0) 
//           divisors++;
//       }
//       console.log(divisors);
//       return divisors;
//   }




// getDivisorCnt(4892);



// let getDivisorCnt = (n) => {
//     let count = 0
//     if (n % Math.sqrt(n) == 0) {
//         count ++
//     }
//     for (let i = 0; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             count += 2
//         }
//     }
//     console.log(count)
//     return count
    
// }

// getDivisorCnt(50000);

var animals = [
{ name: "Cat", numberOfLegs: 4 },
{ name: "Snake", numberOfLegs: 0 },
{ name: "Dog", numberOfLegs: 4 },
{ name: "Pig", numberOfLegs: 4 },
{ name: "Human", numberOfLegs: 2 },
{ name: "Bird", numberOfLegs: 2 }
]

let sortAnimal = (animals) => {
    let clone = JSON.parse(JSON.stringify(animals)) 
    if (!clone) return [];
      return clone.sort((a, b) => {
        return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
      })
    }
    console.log(sortAnimal(animals));

