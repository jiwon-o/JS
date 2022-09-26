// Operator(연산자)
"use strict";

// 1. String concatenation(문자열 연결) '+'
console.log("my" + " cat"); // my cat
console.log("1" + 2); // 12 (type: string)
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3
//string literals의 좋은점: 줄바꿈을 하거나 중간에 ''같은 작은 따옴표가 있어도 그대로 출력해준다.
//''를 사용할 땐 \n(줄바꿈), \t(탭), \'(작은 따옴표) 등을 사용해야 한다.

// 2. Numeric operators(숫자 연산자)
console.log(1 + 1); // 2 (add)
console.log(1 - 1); // 0 (subtract)
console.log(3 / 2); // 1.5 (divide)
// 몫만 구하는 방법: parseInt or Math.floor()
console.log(1 * 1); // 1 (multiply)
console.log(5 % 2); // 1 (remainder)
console.log(2 ** 3); // 8 (exponentiation(2^3))

// 3. Increment and decrement operators (증가 / 감소 연산자)
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// preIncrement = counter; 와 같음
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; 와 같음
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 4

//--counter, counter--도 같음

// 4. Assignment operators(할당 연산자)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators(비교 연산자)
console.log(10 < 6); // false (less than)
console.log(10 <= 6); // false (less than or equal)
console.log(10 > 6); // true (greater than)
console.log(10 >= 6); // true (greater than or equal)

// 6. Logical operators: ||(or), &&(and), !(not)
let value1 = false;
let value2 = 4 < 2;

// ||(or): 하나라도 true면 true, finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // false || false || true

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱"); // 이모지: win + .
  }
  return true;
}

// * 처음에 true가 나오면 거기서 멈춤(무조건 true이므로)
value1 = true;

console.log(`or: ${value1 || value2 || check2()}`); // true || false || true

// check2는 실행되지 않음(value1이 true이므로 멈췄기 때문)
function check2() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱");
  }
  return true;
}
// 따라서 check2()와 같이 연산이 복잡한 함수를 뒤로 둠으로써 simple한 것부터 계산하도록 하는 것이 좋다.(앞에 simple한 것들이 모두 false일 때만 계산할수 있도록)

// &&(and): 모두 true여야 true, 하나라도 false면 false, finds the first falsy value
value1 = false;
value2 = true;
console.log(`and: ${value1 && value2 && check3()}`); // false && true && true

// value1이 false이므로 출력안됨
function check3() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱"); // 이모지: win + .
  }
  return true;
}

// &&는 null체크 할때도 많이 쓰임
// often used to compress long if-statement
// nullableObject && nullableObject.something
// nullableObject가 null이면 nullableObject.something가 실행 안됨
// nullableObject가 null이 아닐때만 nullableObject의 something을 받아오게 됨

// if (nullableObject != null) {
//     nullableObject.something;
// } 와 같이 쓸 수 있음

// !(not)
value1 = true;
console.log(!value1); // false

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose(느슨한) equality, with type conversion(타입 변환함)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict(엄격한) equality, no type conversion(타입 변환 안함)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const jiwon1 = { name: "jiwon" };
const jiwon2 = { name: "jiwon" };
console.log(jiwon1 == jiwon2); // false
console.log(jiwon1 === jiwon2); // false
// jiwon1과 jiwon2에는 같은 name이 들어있지만 다른 reference를 갖고 있기 때문에 다르다.

const jiwon3 = jiwon1;
console.log(jiwon1 === jiwon3); // true
// jiwon3은 jiwon1과 같은 reference를 가진다.

console.log(0 == false); // true
console.log(0 === false); // false, 0은 boolean형이 아니라 number이기 때문에
console.log("" == false); // true
console.log("" === false); // false, ''도 boolean형이 아니기 때문에
console.log(null == undefined); // true
console.log(null === undefined); // false, null은 null type(object type), undefined는 undefined type
// console.log(`null type: ${typeof null}, undefined type: ${typeof undefined}`);

// 8. Conditional operators: if
// if, else if, else
const name = "coder";
if (name === "jiwon") {
  console.log("Welcome, Jiwon!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ? (if문을 조금 더 간단하게 쓸 수 있음, 간단할 때만 사용)
// condition ? value1 : value2;
console.log(name === "jiwon" ? "yes" : "no"); // no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`while: ${i}`); // i=0임에도 불구하고 실행
  i--;
} while (i > 0);

// for loop, for(begin; condition; step) : begin은 처음 한번만 실행
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops (중첩 루프)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  if (i > 8) break;
  console.log(`i: ${i}`);
}
