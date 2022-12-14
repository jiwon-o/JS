"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits); // 0: "π" 1: "π" length: 2
console.log(fruits.length); // 2
console.log(fruits[0]); // π
console.log(fruits[1]); // π
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // λ°°μ΄μ λ§μ§λ§ index

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index) {
  console.log(fruit, index); // π 0, π 1
});
// ββ
fruits.forEach((fruit, index) => console.log(fruit, index)); // π 0, π 1

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits); // π π π π

// pop: remove an item from the end
fruits.pop();
console.log(fruits); // π π π
fruits.pop();
console.log(fruits); // π π

// unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits); // π π π π

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits); // π π π
fruits.shift();
console.log(fruits); // π π

// note: shift, unshiftλ push, popλ³΄λ€ ν¨μ¬ λλ¦¬λ€.(μλ£κ΅¬μ‘° μ΄ν΄)

// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits); // π π π π π

// splice(start: number, deleteCount?: number): string[] --> μ΄λμλΆν° μ§μΈμ§ / λͺκ°λ μ§μΈμ§ (deleteCount? μμ ?κ° μλ κ²μ μ§μ ν΄λ λκ³  μν΄λ λλ€λ λ»)
fruits.splice(1); // 2λ²μ§Έ μΈλ±μ€λΆν° λκΉμ§ μ§μμ€(deleteCountκ° μμΌλ©΄ λκΉμ§)
console.log(fruits); // π

fruits.push("π", "π", "π", "π");
console.log(fruits); // π π π π π

fruits.splice(1, 2); // 2λ²μ§Έ μΈλ±μ€λΆν° 2κ°λ§ μ§μμ€
console.log(fruits); // π π π

fruits.push("π", "π");
console.log(fruits); // π π π π π

fruits.splice(1, 1, "π₯", "π"); // 2λ²μ§Έ μΈλ±μ€λΆν° 1κ°λ§ μ§μ°κ³  κ·Έ μλ¦¬μ π₯, πμ λ£μ΄μ€
console.log(fruits); // π π₯ π π π π
// spliceλ₯Ό μ¬μ©ν΄ μ§μ°μ§ μκ³  μ€κ°μ μΆκ°λ§ ν΄μ€ μ μλ€.
// fruits.splice(1, 0, "π₯₯", "π"); // 2λ²μ§Έ μΈλ±μ€μ π₯₯, π μΆκ°ν΄μ€
// console.log(fruits); // π π₯₯ π π₯ π π π π

// concat: combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2); // concat: λ°°μ΄μ κ²°ν©ν¨
console.log(newFruits); // π π₯ π π π π π π₯₯

// 5. Searching
// indexOf: find the index
console.log(fruits); // π π₯ π π π π
console.log(fruits.indexOf("π")); // 0 --> μ¬κ³Όλ 0λ²μ§Έ index
console.log(fruits.indexOf("π")); // 2
console.log(fruits.indexOf("π₯₯")); // -1 --> μμΌλ©΄ -1 μΆλ ₯

// includes
console.log(fruits.includes("π")); // true
console.log(fruits.includes("π₯₯")); // false

// lastIndexOf
console.log(fruits); // π π₯ π π π π
fruits.push("π");
console.log(fruits); // π π₯ π π π π π
console.log(fruits.indexOf("π")); // 0 --> μ²«λ²μ§Έ μ¬κ³Ό μΈλ±μ€λ§ λμ΄
console.log(fruits.lastIndexOf("π")); // 6 --> μ μΌ λ§μ§λ§μ μλ μΈλ±μ€
