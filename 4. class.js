"use strict";

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar(문법상으로 달달한, 쉬운) over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor: 생성자를 이용해서 나중에 오브젝트를 만들 때 필요한 데이터를 전달한다.
  constructor(name, age) {
    this.name = name; // fields
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const person = new Person("jiwon", 20); // 새로운 오브젝트 생성(new)
console.log(person.name); // jiwon
console.log(person.age); // 20
person.speak(); // jiwon: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age는 getter으로, age는 setter으로
  }

  // get: 값 리턴
  get age() {
    return this._age; // setter에서 설정한 값을 return
  }

  // set: 값 설정
  set age(value) {
    // if (value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value; // value가 0보다 작으면 0으로 표시, 아니면 value 표시
  }

  // get이나 set에서는 field의 이름을 다르게 해줘야함.
}

const user1 = new User("Steve", "Job", -1); // 사용자가 실수로 나이를 -1로 설정함(setter에서 설정해줘야함)
console.log(user1); // User {firstName: 'Steve', lastName: 'Job', _age: 0}
console.log(user1.age); // 0

// 3. public, private fields
// Too soon! (ES10)
class Experiment {
  publicField = 2; // public
  #privateField = 0; // private(앞에 #)
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1); // Article {articleNumber: 1}
console.log(article1.publisher); // undefined (static이 사용되지 않았으면 출력 가능)

// static은 object마다 할당되어지는 것이 아니라 클래스 자체에 붙어있는 것.
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 어떨때 static을 사용하는 것이 좋을까?
// 오브젝트에 들어오는 데이터에 상관없이 공통적으로 사용하는 데이터면 static과 static method를 이용해서 작성하는 것이 메모리의 사용을 조금 더 줄여 줄 수 있다.
// 나중에 typescript에서 더 자세히

// 5. 상속과 다양성
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

const shape = new Shape(10, 10, "white");
console.log(shape.color); // white

// Rectangle class가 Shape class를 상속
class Rectangle extends Shape {
  // Override(다형성)
  draw() {
    console.log("⬜"); // Overriding
    super.draw(); // 부모의 메소드도 호출
  }
}

class Triangle extends Shape {
  draw() {
    console.log("🔺");
    super.draw();
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle, color: ${this.color}`; // Object의 toString override
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // ⬜, drawing blue color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, "red");
triangle.draw(); // 🔺, drawing red color!
console.log(triangle.getArea()); // 200
console.log(triangle.toString()); // Triangle, color: red

// 6. Class checking: instanceOf - 왼쪽의 오브젝트가 오른쪽의 클래스의 인스턴스인지 아닌지. 즉, 오브젝트가 클래스를 이용해서 만들어진 것인지 아닌지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true(Object에는 constructor, toString 등이 있다.)
