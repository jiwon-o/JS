"use strict";

// JSON (String)
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(`value: ${json}, type: ${typeof json}`); // value: true, type: string

json = JSON.stringify(["apple", "banana"]); // 배열을 JSON으로 변환
console.log(json); // ["apple","banana"] --> 사실은 string 형태

// object를 JSON으로 변환
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(), // 현재 날짜를 받아오는 API
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2022-09-08T09:25:59.196Z"}
// jump 함수는 제외된다. (함수는 오브젝트 위에 있는 데이터가 아니기 때문에)

json = JSON.stringify(rabbit, ["name", "color"]); // ["name", "color"]: replacer
console.log(json); // {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // rabbit의 모든 데이터 출력
  return key === "name" ? "jiwon" : value; // key가 name이면 jiwon으로 변경, 아니면 원래 value
});
console.log(json); // {"name":"jiwon","color":"white","size":null,"birthDate":"2022-09-08T10:16:33.503Z"}

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: '2022-09-08T10:16:33.503Z'} --> object 형태
rabbit.jump();
// obj.jump(); // error

console.log(rabbit.birthDate.getDate()); // 8 --> rabbit.birthDate는 new Date()라는 오브젝트
console.log(obj.birthDate); // 2022-09-08T10:18:51.174Z --> String
// console.log(obj.birthDate.getDate()); // error --> obj.birthDate는 string이기 때문에 birthDate에 있는 api를 사용할 수 없다.

// 따라서 parse의 reviver라는 api를 사용해 좀 더 세밀하게 설정하여 다시 Date()로 변환한다.
obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: Thu Sep 08 2022 19:18:51 GMT+0900 (한국 표준시)}

console.log(rabbit.birthDate.getDate()); // 8
console.log(obj.birthDate.getDate()); // 8
