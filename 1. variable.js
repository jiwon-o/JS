// 1.Use strict
// added in ES5
// use this for Vanilla JS
"use strict";

// 2. Variable, rw(read/write) - 읽고 쓰기 가능, 한번 할당해도 값을 변경할 수 있는 변수
// let(mutable: 변하기 쉬운)
// block scope
{
  let name = "jiwon";
  console.log(name);
  name = "hello";
  console.log(name);
}

// var은 사용 X
// 1) var은 선언하기도 전에 값을 할당할 수 있다.
// 이를 var hoisting이라고 한다.
// hoisting: 끌어올려주다. -> var로 변수를 선언하거나, 함수를 선언했을 때 어디에 선언했냐에 상관없이 항상 선언을 제일 위로 끌어 올려주는 것을 말한다.

// 2) var은 block scope이 없다. block을 무시함.
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read) - 읽기만 가능 : 한번 할당하면 절대 값이 바뀌지 않는 변수
// 가능하면 const를 사용하는 것이 좋음
// only use let if variable needs to change. (변경이 필요한 변수라면 let를 쓰자)
const maxNumber = 5;
const daysInWeek = 7;

// data type: Immutable data types, Mutable data types
// Immutable(불변) data types: primitive types(기본 타입), frozen objects (i.e. let, object.freeze()). ex) let jiwon; -> jiwon 자체를 변경할 순 있지만 jiwon에서 i를 뺀다던지 하는 것은 불가능
// Mutable(변할수 있는) data types: all objects by default are mutable in JS(모든 오브젝트는 변경 가능)
// favor immutable data type always for a few reasons(object를 쓰는 이유):
// - security(보안)
// - thread safety(쓰레드 안정성)
// - reduce human mistakes(실수 감소)

// 4. Variable types
// primitive type(더이상 작은 단위로 나눠질 수 없는): single item - number, string, boolean, null, undefine, symbol
// object(single item을 한 단위로 묶어서 관리): box container

// function(function도 데이터 타입 중 하나): first-class function - 다른 데이터 타입처럼 함수도 변수에 할당이 가능하고 함수의 파라미터를 인자로도 전달할 수 있으며 함수에서 return 타입으로도 function을 리턴할 수 있다.
// c언어나 java에서는 숫자를 정의하는 변수가 여러개(short, int, long, float, double, byte)지만 javascript는 number 하나이다. - let을 사용해도 된다.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // 17, number
console.log(`value: ${size}, type: ${typeof size}`); // 17.1, number

// number - special numeric values: infinity, -infinity, NaN(Not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over -2**53 ~ 2*53, 끝에 n을 붙여 표시한다.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // type: bigint

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // hello brendan, string
const helloBob = `hi ${brendan}!`; //template literals (template string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // hi brendan!, string
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''(비어져있는 string)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // true, boolean
console.log(`value: ${test}, type: ${typeof test}`); // false, boolean

// null(null은 object)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // null, object

// undefined(선언되지 않은)
let x;
console.log(`value: ${x}, type: ${typeof x}`); // undefined, undefined

// symbol: create unique identifiers for objects(객체에 대한 고유 식별자 생성)
// 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때나 정말 고유한 식별자가 필요할 때 쓰여짐
// 간혹 식별자를 string을 이용해서 쓰는 경우, 다른 모듈이나ㅉ 다른 파일에서 동일한 스트링을 썼을 때 동일한 식별자로 간주된다.
// symbol은 이렇게 동일한 'id'를 이용해서 심볼을 만들었을 때 이 두가지의 심볼은 다른 경우이다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1); // Symbol(id)
console.log(symbol2); // Symbol(id)
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1); // Symbol(id)
console.log(gSymbol2); // Symbol(id)
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error, 항상 .description을 붙여줘 string으로 변환하여 출력해줘야 한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// 5. Dynamic typing: dynamically typed language(javascript의 핵심) <-> c,java - statically typed language(정형화된 언어)
// c나 java는 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언했던 반면에
// 자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 동작할 때(runtime) 할당된 값에 따라서 타입이 변경될 수 있다는 의미
// 빠르게 prototype을 만들때 유용하다
let text = "hello";
console.log(text.charAt(0)); // h (hello의 첫번째 index)
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1, number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
// javascript에서 +연산은 문자 연결, 숫자 더하는 기능을 모두 담당하고 문자 연결을 우선으로 하지만,
// -, *, /는 숫자 계산만 담당한다.

// console.log(text.charAt(0)); // error(text는 number이기 때문에) 이런 실수를 많이 한다.
// 이래서 typescript가 생겼다.

// 6. object, real-life object, data structure
const jiwon = { name: "jiwon", age: 20 };
console.log(jiwon); // {name: 'jiwon', age: 20}
jiwon.age = 21;
console.log(`name: ${jiwon.name}, age: ${jiwon.age}`); // name: jiwon, age: 21
