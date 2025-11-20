// let i =[1,2,3,4,5,6,7,8,9]

// let odd = i.filter((x)=> x>8)
// console.log(odd); 

// let i =[1,2,3,4,5,6,7,8,9];
// function findsum(arry){

// }



// //reduce example

// const max = [39,45,67,89,21,98];

// const maximum =max.reduce(getmax);
// const minumum = max.reduce(getmin);

// console.log(maximum);
// console.log(minumum);
//  function getmax(acc,curr){
//     return Math.max(acc,curr);
//  }

//  function getmin (acc,curr){
//     return Math.min(acc,curr);
//  }

//callback example

// function card (name,callback){
//     console.log("hy "+ name);
//     callback();
// }
// function call(){
//     console.log("how are you");
// }
// card("hashin",call);

// //with normal parameter
// function card(name,...hobby){
//     console.log("name:" + name);
//     console.log("hobbiies:" + hobby);
// }
// card("Hashin","loving","caring");

// //example 2
// function sum(...numbers){
//     console.log(numbers);
    
// }
// sum(1,2,3,4,5);

//copying arrys 
// let arr1=[1,2,3,4,5,6];
// let arr2=[...arr1];
// console.log(arr2);

//spreding function call
// function add(a,b,c){
//     return a+b+c;
// }
//  let numbers =[2,3,4,5];
//  console.log(add(...numbers));

// js objects 1️⃣ Using Object Literal (Most Common Way)

//  const car={
//     Name:"Defender",
//     Model:2024,
//     Color:"black"
    
    
//  }
//  document.write( "name: " +car.Name +"<br>");
//  document.write("model: " +car.Model +"<br>");
//  document.write("color: " +car.Color +"<br>");

//2️⃣ Using the new Object() Keyword

// const students = new Object();
// students.name ="hashin";
// students.age =21;
// students.course ="it";
// console.log(students);

// function persons (name,age,city){
//     this.name =name;
//     this.age =age;
//     this.city =city;
// }
// const person1 = new persons ("hashin",21,"malappuram");
// const person2 = new persons ("shanu",21,"malappuram");
// console.log (person1)

// What is ‘method’?
// a method is a function which is a property of an object.

//  const person  ={
//     name: "hashin",
//     age:21,
//     greet: function(){
//         confirm.log("hello "+ this.name);
//     }
//  }
//   person.greet();

 // short metnhod syntax

//   const person={
//     name: "hashin",
//     age:21,
//     card(){
//         console.log("hello "+ this.name);
//     }
// } 
// person.card();



                       // this keyword



// const person ={
//     name: " hashin",
//     age:21,
//     card(){
//         console.log("hy "+  this.name);
//     }
// }
// person.card();
// Alone global scope
// console.log(this);

//3️⃣ In a Function (non-strict mode) → this = global object
// function show(){
//     console.log(this);
// }
// show();

// //4️⃣ In a Function (strict mode) → this = undefined

// "use strict";
// function show1(){
// console.log(this);
// }
// show1();

// 5️⃣ In an Event Handler → this = the element that received the event

// <button onclick="changeColor(this)">Click Me</button>

// <script>
// function changeColor(element) {
//   element.style.backgroundColor = "yellow";
// }
// </script>

// // 1. Object method
// const obj = { name: "Hashin", say() { console.log(this.name); } };
// obj.say(); // Hashin

// // 2. Alone
// console.log(this); // window

// // 3. Function
// function test() { console.log(this); }
// test(); // window

// // 4. Strict mode
// "use strict";
// function test2() { console.log(this); }
// test2(); // undefined

// // 5. Event (HTML)
// <button onclick="alert(this.tagName)">Click Me</button> 
// // Output: BUTTON

//Array destructuring & Object destructuring
// const fruits = ["Apple", "Banana", "Mango"];

// // old way
// // let a = fruits[0];
// // let b = fruits[1];

// const [a, b, c] = fruits;

// console.log(a); // Apple
// console.log(b); // Banana
// console.log(c); // Mango

//   Default Values
// const numbers = [10];
// const [x = 0, y = 5] = numbers;

// console.log(x); // 10
// console.log(y); // 5 (default value)

//Skip Values used  " ,"

// const colors = ["red", "green", "blue"];
// const [first, , third] = colors;
// console.log(first); // red
// console.log(third); // blue

                //2️⃣ Object Destructuring
 
// const person ={
//     name:"hashin",
//     age:21,
//     city:"kochi"
// };
//  const {name,age,city} = person
//  console.log(name);
//  console.log(age);
//  console.log(city);

//Example 2 — Rename Variables
// const person ={
//     name:"hashin",
//     age:21
// };
//   const {name:personName, age:ageofperson}= person
//   console.log(personName);
//   console.log(ageofperson);

              //Hosting

//   sayHi();   // calling before defining

// function sayHi() {
//   console.log("Hello!");
// }    

// // // ex2

//  sayhello();
//  function sayhello(){
//    console.log("hy");
//  }

// //🔹 Example 2 — Variable Hoisting with var
 
// console.log(a);
// var a  =10;

// var a;     // hoisted
// console.log(a); // undefined
// a = 10;

// //🔹 Example 3 — Let and Const Hoisting
// console.log(b); // ❌ ReferenceError
// let b = 20;
//🧠 Reason:
//let and const are also hoisted, but they are in a "Temporal Dead Zone" 
//(TDZ) — cannot be used before declaration.

// example 4 — Function Expression (not hoisted like normal function)
// greet(); // ❌ Error

// var greet = function() {
//   console.log("Hi!");
// };

 
//  Explanation:
// Only the variable name greet is hoisted (as undefined),
//  not the function itself.

// var greet;  // hoisted
// greet();    // error, greet is undefined
// greet = function() { console.log("Hi!"); }

      //     //Closure

      // function outer (){
      //   let name ="hashin";
      //   function inner(){
      //     console.log("hello "+ name);
      //   }
      //   return inner();
      // }    
      // const card =outer();
      // card();

//       greet(); // Output: Hello Hashin
// 🧩 Explanation:

// outer() runs and finishes.
// Normally, variables inside outer() should disappear.
// But inner() still remembers name — because of closure.
// 💬 So, inner keeps a reference to name through closure.

        //Higher order function//

//  function greet (name){
//   return"helloo" +name;
//  }
// function process(callback){
//   let name ="Hashin";
//   console.log(callback(name));  // callback = greet
// }
// process(greet);

//Explanation:
// processUserInput is a higher-order function because
//  it takes another function (greet) as a parameter.
// greet is called a callback function.


                //Pure function//

// function add(a, b) {
//   return a * b;
// }

// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5 again ✅

// 🧠 Simple Rule:

// 👉 Same input → same output
// 👉 No side effects (no changes outside function)

                // Prototype //











        //Local storage & session storage//
        
//  // Store data
// localStorage.setItem("name", "Hashin");

// // Get data
// let user = localStorage.getItem("name");
// console.log(user); // Output: Hashin

// // Remove one item
// localStorage.removeItem("name");

// // Clear all data
// localStorage.clear();       


// setItem → data save cheyyan
// getItem → data edukkan
// removeItem → oru data delete cheyyan
// clear → ellam clear cheyyan

              // session storage//

// // Store data
// sessionStorage.setItem("theme", "dark");

// // Get data
// let theme = sessionStorage.getItem("theme");
// console.log(theme); // Output: dark

// // Remove one item
// sessionStorage.removeItem("theme");

// // Clear all
// sessionStorage.clear();

// example 2/

// localStorage.setItem("name", "Hashin");
// console.log(localStorage.getItem("name")); // Hashin

// sessionStorage.setItem("city", "Kochi");
// console.log(sessionStorage.getItem("city")); // Kochi

                 //Call apply bind//
                    
                // Call method// 
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// const person1 = {
//   firstName: "Hashin",
//   lastName: "Nadin"
// };

// console.log(person.fullName.call(person1)); 
// // Output: Hashin Nadin

                  // Apply method//
// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + " from " + city + ", " + country;
//   }
// };

// const person1 = {
//   firstName: "Hashin",
//   lastName: "Nadin"
// };

// console.log(person.fullName.apply(person1, ["Kochi", "India"]));
// // Output: Hashin Nadin from Kochi, India

                  // Blind method//

// const person = {
//   firstName: "Hashin",
//   lastName: "Nadin",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// const member = person.fullName.bind(person);

// console.log(member()); // Output: Hashin Nadin

                 //Map//
                  
// array.map(function(currentValue, index, array) {
//    // return new value for each element
// });

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubled); // [2, 4, 6, 8, 10]

                  //arrowfunction with map//
       
//  const numbers = [10, 20, 30];
// const half = numbers.map(num => num / 2);

// console.log(half); // [5, 10, 15]
                 
            // with objects map//

// const students = [
//   { name: "Hashin", marks: 80 },
//   { name: "Hanan", marks: 90 },
//   { name: "Loyad", marks: 85 }
// ];

// const names = students.map(student => student.name);

// console.log(names); // ["Hashin", "Hanan", "Loyad"]

// ⚡ Important Points:

// map() always returns a new array ✅

// It does not modify the original array ❌

// Used mostly for transforming data (like converting numbers
//       , changing formats, etc.)

                    //Set//

// Syntax:
// const mySet = new Set();              

// const mySet = new Set([1, 2, 3, 3, 4]);
// console.log(mySet); // Set(4) {1, 2, 3, 4}

//         //ex2

// const fruits = new Set();
// fruits.add("apple");
// fruits.add("banana");
// fruits.add("apple"); // duplicate — ignored

// console.log(fruits); // Set(2) {"apple", "banana"}

// Method	       Description

// add(value)	       Add new value
// delete(value)	 Remove a value
// has(value)	       Check if exists
// clear()	       Remove all values
// size	             Returns total count

           //First-class function//

// const greet = function() {
//   return "Hello, Hashin!";
// };

// console.log(greet()); // Hello, Hashin!

// //ex2//

// function sayHello() {
//   return "Hello!";
// }

// function greetUser(fn) {
//   console.log(fn()); // calling the passed function
// }

// greetUser(sayHello); // Output: Hello!

             // math//

//  console.log(Math.round(4.5));  // 5
// console.log(Math.ceil(4.1));   // 5
// console.log(Math.floor(4.9));  // 4
// console.log(Math.trunc(4.8));  // 4
            
