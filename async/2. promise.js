"use strict";

// Promise is a JavaScript object for asynchronous operation.(비동기적 기능을 수행할 때 콜백함수 대신 유용하게 쓸 수 있는 JS 오브젝트)
// heavy한 일들을 할 때 promise를 쓰는 이유: 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어올 때 시간이 많이 걸리는데,
// 이러한 것들을 동기적으로 처리하면 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음 라인에 코드가 실행되지 않기 때문에
// 시간이 조금 걸리는 일들은 promise를 만들어 비동기적으로 처리하는 것이 좋다.

// state(상태): pending(무거운 operation을 수행하고 있는 중), fulfilled(수행이 완료되어 성공), (rejected)실패
// Producer(우리가 원하는 데이터를 제공하는 사람) vs Consumer(제공된 데이터를 필요로하는 사람)

// 1. Producer
// 새로운 Promise가 만들어질 때, 기본적으로 executor라는 콜백함수가 바로 실행이 된다.
// 만약 네트워크 요청을 사용자가 요구했을 때만 해야되는 경우라면, 즉 사용자가 버튼을 눌렀을 때 네트워크 요청을 해야될 때
// 이런식으로 코드를 작성하게 되면 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 일어날 수도 있다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("jiwon"); // 기능을 성공적으로 수행했을 때 호출하는 콜백함수
    reject(new Error("no network")); // 기능의 수행을 실패했을 때
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 1) then: Promise가 정상적으로 잘 수행되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 값이 value라는 파라미터로 전달
// 2) catch: 실패한 Error를 받아옴
// 3) finally: 성공했던지 실패했던지 마지막에 무조건 호출
promise
  .then((value) => {
    // value = resolve의 'jiwon'
    console.log(value); // jiwon
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then((num) => console.log(num)); // 5(2초후 실행)

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg) // = then((hen) => getEgg(hen))
  .catch((error) => {
    return "🥖";
  }) // 만약 이 전 getEgg에서 실패한다면 에러를 잘 처리해서 빵으로 대체, 전체적인 promise chain에 문제가 발생하지 않도록 처리
  .then(cook) // = (egg) => cook(egg)
  .then(console.log) // = (meal) => console.log(meal)
  .catch(console.log);
