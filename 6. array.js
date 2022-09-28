"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits); // 0: "🍎" 1: "🍌" length: 2
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 index

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
  console.log(fruit, index); // 🍎 0, 🍌 1
});
// ↓↓
fruits.forEach((fruit, index) => console.log(fruit, index)); // 🍎 0, 🍌 1

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits); // 🍎 🍌 🍓 🍑

// pop: remove an item from the end
fruits.pop();
console.log(fruits); // 🍎 🍌 🍓
fruits.pop();
console.log(fruits); // 🍎 🍌

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍑");
console.log(fruits); // 🍓 🍑 🍎 🍌

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits); // 🍑 🍎 🍌
fruits.shift();
console.log(fruits); // 🍎 🍌

// note: shift, unshift는 push, pop보다 훨씬 느리다.(자료구조 이해)

// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits); // 🍎 🍌 🍓 🍑 🍋

// splice(start: number, deleteCount?: number): string[] --> 어디서부터 지울지 / 몇개나 지울지 (deleteCount? 에서 ?가 있는 것은 지정해도 되고 안해도 된다는 뜻)
fruits.splice(1); // 2번째 인덱스부터 끝까지 지워줘(deleteCount가 없으면 끝까지)
console.log(fruits); // 🍎

fruits.push("🍌", "🍓", "🍑", "🍋");
console.log(fruits); // 🍎 🍌 🍓 🍑 🍋

fruits.splice(1, 2); // 2번째 인덱스부터 2개만 지워줘
console.log(fruits); // 🍎 🍑 🍋

fruits.push("🍌", "🍓");
console.log(fruits); // 🍎 🍑 🍋 🍌 🍓

fruits.splice(1, 1, "🥝", "🍍"); // 2번째 인덱스부터 1개만 지우고 그 자리에 🥝, 🍍을 넣어줘
console.log(fruits); // 🍎 🥝 🍍 🍋 🍌 🍓
// splice를 사용해 지우진 않고 중간에 추가만 해줄 수 있다.
// fruits.splice(1, 0, "🥥", "🍒"); // 2번째 인덱스에 🥥, 🍒 추가해줘
// console.log(fruits); // 🍎 🥥 🍒 🥝 🍍 🍋 🍌 🍓

// concat: combine two arrays
const fruits2 = ["🍉", "🥥"];
const newFruits = fruits.concat(fruits2); // concat: 배열을 결합함
console.log(newFruits); // 🍎 🥝 🍍 🍋 🍌 🍓 🍉 🥥

// 5. Searching
// indexOf: find the index
console.log(fruits); // 🍎 🥝 🍍 🍋 🍌 🍓
console.log(fruits.indexOf("🍎")); // 0 --> 사과는 0번째 index
console.log(fruits.indexOf("🍍")); // 2
console.log(fruits.indexOf("🥥")); // -1 --> 없으면 -1 출력

// includes
console.log(fruits.includes("🍍")); // true
console.log(fruits.includes("🥥")); // false

// lastIndexOf
console.log(fruits); // 🍎 🥝 🍍 🍋 🍌 🍓
fruits.push("🍎");
console.log(fruits); // 🍎 🥝 🍍 🍋 🍌 🍓 🍎
console.log(fruits.indexOf("🍎")); // 0 --> 첫번째 사과 인덱스만 나옴
console.log(fruits.lastIndexOf("🍎")); // 6 --> 제일 마지막에 있는 인덱스
