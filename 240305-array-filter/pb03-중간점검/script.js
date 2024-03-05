// // 함수, 매개변수 및 인자(인수)값 작동 원리
// const hello = (name, message = "안녕하세요") => {
//   console.log(`${name}님 ${message}`);
// };

// hello("홍길동", "반갑습니다");
// hello("영심이");

// // 함수, 나머지 매개변수
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// };

// console.log(addNum(1, 2));
// console.log(addNum(1, 2, 3, 4, 5, 6));

// // 서로 다른 두개의 배열을 합치고자 할 떄
// const animals = ["bird", "cat"];
// const fruit = ["apple", "banana", "cherry"];

// console.log(animals.concat(fruit));
// const result = [...animals, ...fruit];
// console.log(result);

// const fruits01 = ["apple", "banana", "cherry"];
// const fruits02 = fruits01;
// console.log(fruits01);
// console.log(fruits02);

// // fruits01[0] = "grap";
// // console.log(fruits01);
// // console.log(fruits02);

// const fruits03 = [...fruits01];
// fruits01[0] = "grap";
// console.log(fruits01);
// console.log(fruits03);

// // 객체안에 신규 key & value를 생성하는 방법
// const book = {
//   title: "javascript",
//   pages: 500,
// };
// book.published = "2024-03";

// console.log(book);

// book["author"] = "David";
// console.log(book);

// // 객체, 프로퍼티 이름을 함수로 생성하는 방법
// const fm = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fm()]: "함수 키",
//   [`${add(10, 20)} key`]: "계산식 키",
// };

// console.log(obj);

// Symbol(): 유일무이한 값을 생성

// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2);

// const id = Symbol("id");
// const tel = Symbol("telnumber");

// console.log(id);

// console.log(member);
// member[tel];
// member[fnc()];

// for (let item in member) {
//   console.log(`${itme} : ${member[item]}`);
// }

const tel = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tel === phone);

console.log(Symbol.keyFor(phone));
