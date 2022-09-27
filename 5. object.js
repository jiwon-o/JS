"use strict";

// Objects
// one of the JavaScript's data types(자바스크립트 데이터 타입 중 하나)
// a collection of related data and/or functionality(관련 데이터 and/or 기능 모음)
// Nearly all objects in JavaScript are instances of Object(JavaScript의 거의 모든 객체는 Object의 인스턴스)
// object = { key : value };

// 1. Object란?
// object를 만드는 방법
const obj1 = {}; // 'object literal' syntax(문법)
const obj2 = new Object(); // 'object constructor' syntax
console.log(obj1); // Object

// primitive type은 변수 하나당 값을 하나만 할당할 수 있다.
const name = "jiwon";
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// 이를 개선하고자 object를 사용
function print2(person) {
  console.log(person.name);
  console.log(person.age);
}
const jiwon = { name: "jiwon", age: 20 };
const umin = new Object({ name: "umin", age: 21 });
print2(jiwon);
print2(umin);

// javascript는 Dynamically typed language이기 때문에 동적으로 타입이 런타임때 결정되는 언어이다.
// 따라서 이런 것도 가능하다.
// 하지만 이렇게 너무 동적으로 코딩하면 금방금방 하기에는 좋지만 나중에 유지 보수 하기가 힘들고 생각지도 못한 에러가 발생할 수 있기 때문에 지양한다.
jiwon.hasJob = true; // jiwon obj에 hasJob 추가
console.log(jiwon.hasJob); // true

delete jiwon.hasJob; // jiwon.hasJob 삭제
console.log(jiwon.hasJob); // undefined

// 2. Computed properties(계산된 프로퍼티)
// 주의할 점: key는 string타입으로 작성해야함
console.log(jiwon.name);
// ↓↓
console.log(jiwon["name"]);

jiwon["hasJob"] = true;
console.log(jiwon.hasJob); // true

// 어떨 때 어떤 것을 쓸까?
// 코딩할 때는 그냥 .(닷)을 쓰는 것이 맞지만
// 정확히 어떤 키가 필요한 지 모를 때(런타임에서 결정될 때) computed properties를 쓴다.
// 실시간으로 원하는 키의 값을 받아오고 싶을 때 사용

// 예시
function printValue(obj, key) {
  // key는 사용자의 입력으로 받아오는 함수(어떤 걸 출력할 지 코딩하는 이 시점에는 모름)
  console.log(obj.key);
}
printValue(jiwon, "name"); // undefined (obj에 key라는 property가 없으므로)

// 따라서 computed properties를 사용
function printValue2(obj, key) {
  console.log(obj[key]);
}
printValue2(jiwon, "name"); // jiwon
printValue2(jiwon, "age"); // 4
printValue2(jiwon, "hasJob"); // true

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = { name: "" }; // person4를 추가할 때 번거로움
// ↓↓
// person이라는 obj를 만들어주는 함수를 작성
function makePerson(name, age) {
  return {
    name: name, // key: value --> key와 value가 같을 때는 key를 삭제해 줘도 된다.
    age: age,
  };
}
const person5 = makePerson("jiwon", 20);
console.log(person5); // {name: 'jiwon', age: 20}

// 4. Constructor function
// 위에 makePerson은 class와 같은 템플릿같은 역할을 하므로 class와 비슷하게 만들 수 있다.
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person6 = new Person("ellie", 30); // class처럼 obj 생성
console.log(person6); // Person {name: 'ellie', age: 30}

// 5. in operator: property existence check (key in obj) - 해당하는 object 안에 key가 있는지 없는지 확인하는 것
console.log("name" in jiwon); // true
console.log("age" in jiwon); // true
console.log("job" in jiwon); // false

// 6. for..in vs for..of
// for in, for (key in obj)
// use strict을 안쓰면 key 앞에 let을 안붙여도 된다.
for (let key in jiwon) {
  console.log(key); // name, age, hasJob
}

// for of, for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1, 2, 4, 5
}
// ↓↓
for (let value of array) {
  console.log(value);
}

// 7. Cloning
const user = { name: "jiwon", age: "20" };
const user2 = user; // user의 reference를 user2에 할당

// 여기서 user2의 name을 바꾸면?
user2.name = "coder";
// user의 name도 바뀜(reference를 공유하고 있기 때문)
console.log(user); // {name: 'coder', age: 20}

// reference를 공유하는 것이 아니라 오브젝트를 정말 복제할 수 있는 방법 --> Cloning
// old way
const user3 = {}; // 비어있는 새 obj를 만들고 for in 사용
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3); // {name: 'coder', age: 20}

// new way
// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = {};
Object.assign(user4, user);
console.log(user4); // {name: 'coder', age: 20}
// or
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
// 이유: 뒤에 있는 obj일수록 앞에 동일한 property가 있다면 값을 덮어쓴다.
const fruit3 = { color: "black", size: "small" };
const mixed2 = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed2.color); // black
console.log(mixed2.size); // small
