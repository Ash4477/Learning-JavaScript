// console.log(`Hello`);
// console.log('World');
// window.alert("This is an alert!");
// window.alert("I like nuggets :>");

// single line comment

/*
multi line comment
*/

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I AM BATMAN";

// let x;
// x = 100;
// console.log(x);

// let y=234;
// console.log(y);

// let age = 22;
// let price = 10;

// console.log(`I am ${age} years old`);
// console.log(`The price is $${price}.`);

// console.log(typeof age);

// let firstName = "Ash";
// console.log(typeof firstName);

// let online = true;
// let offline = false;

// console.log(typeof online);

// let name = "Ash F";
// let isStudent = true;
// let age = 22;

// document.getElementById("p1").textContent = `Name: ${name}`;
// document.getElementById("p2").textContent = `Age: ${age}`;
// document.getElementById("p3").textContent = `isStudent: ${isStudent}`;

// let num = 2;

// num = num + 2;
// num = num - 2;
// num = num * 2;
// num = num / 2;
// num = num ** 3;
//  num = num % 2;


// num += 2;
// num **= 3;
// num %= 3;

// num++;
// num--;

// console.log(num);

/*
 operator precedence
 1. parenthesis
 2. exponents
 3. mult and div and modulus
 4. add and subtract
 */

//  let result = 1 + 2 * 3 + 4 ** 2;

//  console.log(result);

/* 
USER INPUT
1. EASY WAY => WINDOW PROMPT
2. PROFESSIONAL WAY => HTML Textbox
*/
// 1
// let username;
// username = window.prompt("Whats your username?");
// console.log(username);

// 2
// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = document.getElementById("myH1").textContent + `, ${username}`;
// };


// type conversion

// let age = window.prompt("Enter age: ");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = "hey";
// let y = "hey";
// let z = "hey";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// const: constant value

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt(`Enter Radius of Circle: `);
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);

// Math 

console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(2.2));
console.log(Math.floor(2.8));
console.log(Math.ceil(2.1));
console.log(Math.trunc(2.1));
console.log(Math.pow(3,2));
console.log(Math.sqrt(16));
console.log(Math.log(10));
console.log(Math.sign(10));
console.log(Math.max(10,20,30));
