// Q1. make a string out of an array (배열을 string으로 변환)
{
  const fruits = ["apple", "banana", "orange"];

  // join(합치다): 배열을 문자열로 변환
  let result = fruits.join();
  console.log(result); // apple,banana,orange
  result = fruits.join("|"); // 구분자(필수 x)
  console.log(result); // apple|banana|orange
}

// Q2. make an array out of a string (string을 배열로)
{
  const fruits = "🍎, 🥝, 🍌, 🍒";

  // split(나누다): 문자열을 배열로 변환(구분자 필수)
  let result = fruits.split(","); // split은 구분자 필수
  console.log(result); // ['🍎', ' 🥝', ' 🍌', ' 🍒']
  result = fruits.split(",", 2); // 구분자, 어디까지 출력할지
  console.log(result); // ['🍎', ' 🥝']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  // reverse: 배열을 거꾸로 배열(원래 array 자체를 변형)
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1] --> 원래 배열 자체도 바뀐다.
}

// Q4. make NEW array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // splice(접착): 어디서부터 몇개 지울지 결정(원래 array 자체를 변형)
  const result = array.splice(0, 2);
  console.log(result); // [1, 2] --> 삭제된 인자값이 리턴
  console.log(array); // [3, 4, 5] --> 삭제된 결과 리턴

  // 문제는 삭제된 새로운 배열을 만드는 것이라 splice는 사용할 수 없다.
  // slice(일부분): 어디서부터 어디 전까지 출력할지 결정(원래 array 변형 X)
  const result2 = array.slice(2, 5); // 3번째 인덱스부터 6번째 인덱스 전까지 출력
  console.log(result2); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]

  // ※ splice는 배열 자체를 수정, slice는 원하는 부분만 리턴해서 받아옴
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find: 콜백함수가 배열의 요소들을 하나씩 출력하고 첫번째로 true인 배열의 요소를 리턴
  const result = students.find(function (student) {
    // console.log(student); // 모든 Student 클래스 출력
    return student.score === 90;
  });
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students(enrolled가 true인 학생)
{
  // filter: 콜백함수가 배열의 요소들을 하나씩 출력하고 true인 모든 값을 리턴
  const result = students.filter((student) => student.enrolled);
  console.log(result); // 0: Student {name: 'A', age: 29, enrolled: true, score: 45} 1: Student {name: 'C', age: 30, enrolled: true, score: 90} 2: Student {name: 'E', age: 18, enrolled: true, score: 88}
}
// ※ find는 첫번째로 true인 요소를 리턴, filter은 true인 모든 요소를 리턴

// Q7. make an array containing only the students' scores(students의 score만 받아와서 배열로 구성)
// result should be: [45, 80, 90, 66, 88]
{
  // map: 콜백함수가 배열 요소 하나 하나를 다른 배열로 만듦
  const result = students.map((student) => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  // some: 배열의 요소 중 하나라도 true가 있는지 없는지를 확인
  const result = students.some((student) => student.score < 50); // score가 50 미만이 학생이 한명이라도 있으면 true 리턴
  console.log(result); // true

  // every: 배열의 모든 요소들이 조건을 충족해야지만 true 리턴
  const result2 = students.every((student) => student.score < 50); // 모든 학생의 score가 50 미만이면 true, 아니면 false
  console.log(result2); // false
}

// Q9. compute students' average score(학생들의 score의 평균)
{
  // ★reduce: 배열에 있는 모든 요소들의 어떤 값을 누적할 때 사용 (reduceRight는 배열의 제일 뒤에서붜터 누적)
  const result = students.reduce((prev, curr) => {
    console.log("-------");
    console.log(prev);
    console.log(curr);

    return prev + curr.score;
  }, 0); // 0: reduce함수의 initialValue(초기화 값)
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(); // map으로 score로만 이루어진 배열을 만든 후, join을 사용해 string으로 변환
  console.log(result); // 45,80,90,66,88
}

// Q11. make a string containing score >= 50
// result should be: '80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score) // map으로 score로 이루어진 배열을 만든 후,
    .filter((score) => score >= 50) // filter로 50점 이상인 배열을 리턴,
    .join(); // string으로 변환
  console.log(result); // 80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// [45, 80, 90, 66, 88] -> '45, 66, 80, 88, 90'
{
  // sort: 요소의 순서를 결정. 첫번째 인수가 두번째 인수보다 작으면 음수(false), 크면 양수(true) 리턴, true이면 순서를 바꿈
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result); // 45,66,80,88,90

  // 반대
  const result2 = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result2); // 90,88,80,66,45
}
