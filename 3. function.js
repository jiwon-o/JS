"use strict";

// js는 Procedural Programming language(절차적 프로그래밍, PP)이라 function이 중요하다.
// class가 추가되어 Object-Oriented Programming(객채지향적 프로그래밍, OOP)이라 생각할 수도 있지만 자바 언어처럼 pure한 oop가 아니라 프로토타입을 베이스로 한 가짜의 oop이다.
// function은 굉장히 중요한 기능을 담당하고 있기 때문에 sub-program이라고도 부른다.(프로그램 내에서 각각의 작은 단위의 기능들을 수행하는 프로그램)

// Function
// - fundamental building block in the program(프로그램을 구성하는 굉장히 기본적인 빌딩 블록)
// - subprogram can be used multiple times(subprogram이라고도 하며 여러번 재사용할 수 있음)
// - performs a task or calculates a value(한가지 task나 어떤 값을 계산할 때 사용된다.)

// 1. Function declaration(함수 선언)
// function name(param1, param2) { body... return; }
// one function === one thing(하나의 함수는 한가지 일만)
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (JS에서 function은 object의 일종이다. 따라서 function을 변수에 할당할 수 있고 파라미터로 전달할 수 있고(Callback) 함수를 return할 수도 있다.)
function printHello() {
  console.log("Hello");
}
printHello();

// javascript는 타입이 없다.
function log(message) {
  console.log(`${message}, type: ${typeof message}`);
}
log("Hello!");
log(1234);
// 따라서 typescript를 사용한다.

// 2. Parameters
// primitive parameters: passed by value (value 전달)
// object parameters: passed by reference (reference 전달)
function changeName(obj) {
  //obj의 name을 coder로 변환하는 함수
  obj.name = "coder";
}
const student = { name: "jiwon" };
changeName(student);
console.log(student); // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by undefined (인수 from이 정의되지 않음)

// 이전
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`); // Hi! by unknown
}
showMessage("Hi!");

// ES6 이후
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`); // Hi! by unknown
}
showMessage("Hi!");

// 4. Rest parameters : 배열 형태 (added in ES6)
function printAll(...args) {
  // 표현 1) for
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]); // dream \n coding \n jiwon
  }

  // 표현 2) for of
  for (const arg of args) {
    // arg: argument(매개변수)
    console.log(arg);
  }

  // 표현 3) forEach
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "jiwon");

// 5. Local scope (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = "global"; // global variable(전역 변수)
function printMessage() {
  let message = "hello"; // local variable(지역 변수)
  console.log(message); // hello
  console.log(globalMessage); // global
  printAnother();
  function printAnother() {
    console.log(message); // Closure: 중첩된 함수에서 자식의 함수가 부모 함수에서 정의된 변수에 접근 가능한 것
    let childMessage = "hello";
  }
  // console.log(childMessage); // error
}
printMessage();
// console.log(message); // error

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`); // == console.log(`sum: ${result}`);

// (return타입이 없는 함수는 return undefined; 가 생략된 것)

// 7. Early return, early exit(현업에서 쓸 수 있는 Tip)
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때 빨리 return을 하여 함수를 종료하는 것이 좋다.
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable(함수는 다른 변수처럼 다뤄질 수 있다.)
// can be assigned as a value to variable(함수는 다른 변수에 할당될 수 있다.)
// can be passed as an argument to other functions(함수는 다른 함수에 파라미터로 전달될 수 있다.)
// can be returned by another function(함수는 다른 함수에 의해 리턴될 수 있다.)

// Function expression(함수 표현법) vs Function declaration(함수 선언법)
// a function declaration can be called earlier than it is defined.(함수 선언은 정의된 것보다 먼저 호출될 수 있다.) --> Hoisting
// a function expression is created when the execution reaches it.(함수 표현은 함수가 할당된 다음부터 호출될 수 있다.)

// 1. Function expression
const print = function () {
  // anonymous function
  console.log("print");
};
print(); // print라는 변수를 함수처럼 호출함.

// 함수 호출이 먼저 되면 error가 뜬다.
// print2(); // error
const print2 = function () {
  console.log("print2");
};

const printAgain = print; // print가 가리키고 있는 함수를 printAgain에 할당
printAgain(); // print

const sumAgain = sum; // 위에 sum이라는 함수를 sumAgain이라는 변수에 할당
console.log(sumAgain(1, 3)); // 호출 가능

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // printYes와 printNo는 function expression
  if (answer === "love you") {
    printYes(); // callback function
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("Yes!");
};

// named function
// expression에서 이름을 쓰는 경우는
// 1) 디버깅을 할 때 디버깅의 stack traces에 함수의 이름이 나오게 하기 위해 사용
// 2) 함수 안에서 자신 스스로의 함수를 또다시 호출할 때 사용(recursions)
const printNo = function print() {
  console.log("No!");
  // print(); // recursion
};
randomQuiz("like you", printYes, printNo); // No!
randomQuiz("love you", printYes, printNo); // Yes!

// 3. Arrow function : 함수를 간결히 만들어주는 중요한 함수
// always anonymous(항상 anonymous function)
const simplePrint1 = function () {
  console.log("simplePrint1");
};
// ↓↓
const simplePrint2 = () => console.log("simplePrint2"); // 훨씬 간결함
simplePrint2();

const add1 = function (a, b) {
  return a + b;
};
// ↓↓
const add2 = (a, b) => a + b; // return생략 (중괄호 있을 때는 생략 불가)
console.log(add2(1, 2));

// 4. IIFE: Immediately Invoked Function Expression(즉시 호출되는 함수 표현식)
function hello() {
  console.log("IIFE");
}
hello();
// ↓↓
(function hello() {
  console.log("IIFE");
})();

// Quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder
const calculate = (command, a, b) => {
  switch (command) {
    case "+":
      return a + b;
    // break; // 위에서 return이나 throw하면 break를 사용할 필요가 없음
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      throw Error("unknown command");
  }
};
console.log(calculate("+", 1, 2));
