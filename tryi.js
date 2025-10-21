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

const students = new Object();
students.name ="hashin";
students.age =21;
students.course ="it";
console.log(students);
