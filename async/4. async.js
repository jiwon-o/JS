// async & await
// 깔끔하게 Promise를 사용할 수 있는 방법
// 무조건 Promise가 나쁘고 async & await가 좋은 것은 아님

// 1. async

// 1) 일반함수(동기적)
function fetchUser() {
  // do network request in 10 secs...
  return "jiwon";
}
const user = fetchUser();
console.log(user);
// JS는 동기적이기 때문에 10초를 기다려야 jiwon이 출력된다. -> 비동기적 처리를 해야함

// ↓↓

// 2) Promise
function fetchUser2() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve("jiwon");
  });
}
const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

// ↓↓

// 3) async
async function fetchUser3() {
  // do network request in 10 secs...
  return "jiwon";
}
const user3 = fetchUser3();
user3.then(console.log);
console.log(user3);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw 'error'; // 에러처리는 일반 처리하는 것 처럼 try, catch를 사용
  return "🍎";
}

// function getBanana() {
//   return delay(3000) //
//     .then(() => "🍌");
// }
async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);
async function pickFruits() {
  // await 병렬처리(코드가 더러워짐 - Promise.all api 사용 추천)
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// ↓↓

// 3. useful Promise APIs
function pickAllFruits() {
  // all: Promise 배열을 전달하면 모든 Promise들을 다 받을때까지 병렬적으로 모아주는 api
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // race: 배열에 전달된 Promise 중 가장 먼저 값을 리턴하는 아이만 전달(apple이 2초, banana가 1초이므로 banana 전달)
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// 숙제: callback-to-promise를 async&await로 수정
