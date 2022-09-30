// async & await
// 깔끔하게 Promise를 사용할 수 있는 방법
// 무조건 Promise가 나쁘고 async & await가 좋은 것은 아님

// 1. async

// 1) 일반함수(동기적)
function fetchUser() {
  // do network request in 2 secs...
  setTimeout(() => {
    return "jiwon";
  }, 2000);
}
const user = fetchUser();
console.log(user); // undefined
// JS는 동기적이기 때문에 undefined이 정의된다. -> 비동기적 처리를 해야함

// ↓↓

// 2) Promise
function fetchUser2() {
  return new Promise((resolve, reject) => {
    // do network request in 3 secs...
    setTimeout(() => {
      resolve("jiwon");
    }, 3000);
  });
}
const user2 = fetchUser2();
user2.then(console.log); // 3초 뒤 jiwon 출력

// ↓↓

// 3) async
async function fetchUser3() {
  // do network request in 3 secs...
  return "jiwon";
}
const user3 = fetchUser3();
user3.then(console.log); // promise와 마찬가지로 then으로 호출

// ※ 그러나 setTimeout()은 async로 해결할 수 없다.
async function fetchUser4() {
  setTimeout(() => {
    return "jiwon";
  }, 4000);
}
const user4 = fetchUser4();
user4.then(console.log); // undefined

// 따라서 Promise를 반환하게 직접 작성한 후 async를 적용해야한다.
// 2. await
const wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec));
async function fetchUser5() {
  await wait(4000);
  return "jiwon";
}
const user5 = fetchUser5();
user5.then(console.log); // 4초 후 jiwon 출력

// await 예시
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// (1) pickFruits()함수에서 promise처럼 호출(콜백지옥과 비슷하게 복잡함)
function pickFruits() {
  return getApple() //
    .then((apple) => {
      return getBanana() //
        .then((banana) => `${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);

// (2) 따라서 async 사용
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
  // (이때 에러처리는 try/catch 사용)
}
pickFruits().then(console.log);

// 하지만 2초후 apple을, 그 다음 1초후 banana를, 총 3초가 걸림 -> 따라서 await 병렬처리가 필요함

// (3) await 병렬처리
async function pickFruits() {
  const applePromise = getApple(); // 병렬처리
  const bananaPromise = getBanana(); // 병렬처리
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 이러면 2초 후 바로 실행

// 하지만 병렬처리 하면 코드가 복잡해짐 -> Promise.all api 사용

// (4) useful Promise APIs
// 4-1. Promise.all
function pickAllFruits() {
  // all: Promise 배열을 전달하면 모든 Promise들을 다 받을때까지 병렬적으로 모아주는 api
  return Promise.all([getApple(), getBanana()]) // 배열형태
    .then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log);

// 4-2. Promise.race
function pickOnlyOne() {
  // race: 배열에 전달된 Promise 중 가장 먼저 값을 리턴하는 아이만 전달(apple이 2초, banana가 1초이므로 1초 후 banana만 전달)
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
