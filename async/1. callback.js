"use strict";

// JavaScript is synchronous.(동기적)
// Synchronous: Execute the code block in order after hoisting.(hoisting이 된 이후부터 작성한 순서에 맞춰서 하나씩 동기적으로 실행)
// hoisting: var로 지정한 변수나 선언한 함수 등이 자동으로 제일 위로 올라가는 것

// Asynchronous: 비동기적으로 언제 코드가 실행될지 예측할 수 없는 것(ex. setTimeout())
console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000); // 브라우저에서 제공되는 api, 지정한 시간(1000ms = 1초)이 지나면 전달한 콜백 함수를 호출
// function(){console.log("2");} : Callback 함수 - 우리가 전달한 함수를 나중에 불러줘
console.log("3"); // 1 3 (1초 지난후)2

// Callback은 항상 비동기적으로 사용될까? NO

// Synchronous callback
function printImmediately(print) {
  print();
} // hoisting된다. (파라미터 print가 콜백함수)

printImmediately(() => console.log("hello")); // 1 3 hello 2

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // hoisting

printWithDelay(() => console.log("async callback"), 2000); // 1 3 hello 2 async callback

// 콜백 지옥 체험
// 사용자의 데이터를 서버에서 받아오는 class
class UserStorage {
  // UserStorage라는 class에 loginUser()라는 로그인하는 메소드, getRoles()라는 역할을 알려주는 메소드
  // onSuccess와 onError는 콜백함수
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jiwon" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        alert(`Hello ${id}, welcome.`);
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jiwon") {
        onSuccess({ name: "jiwon", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백함수의 문제점:
// 1) 가독성이 떨어진다.
// 2) 이해하기 힘들다.
// 3) 에러가 발생하거나 디버깅할 때 어렵다, 유지보수가 어렵다.
