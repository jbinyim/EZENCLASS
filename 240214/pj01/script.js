// 자료형
// 변수에 담겨질 수 있는 값의 형태를 의미
// 숫자형 / 문자형 / 논리형 / 객체 / 배열 / 심벌 / 함수
// 객체 => {key: value} => promperty (*프로퍼티 = 속성)

// 객체 > 배열

// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];

// index & length
// 비트 => 0, 1
// 바이트

// JS => 객체 지향 프로그래밍 언어
// 절차지향 => 고차함수

// console.log(arr[3]);
// console.log(arrStr.length);

// 심벌: 유일무일한 값을 저장하고 관리하고 싶은 경우 사용

// let var1 = Symbol();
// let var2 = Symbol();

// 비교연산자 => 서로다른 피연산자를 비교할대 사용하는 연산자

// console.log(var1 === var2);

// e-commerce = 쇼핑물
// 회원들의 개인정보

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };

// member01.id = 6789;
// console.log(member01);

// const member02 = {
//   name: "Kim",
//   id: 12345,
// };

// console.log(member02);

// const member02 = {
//   name: "Park",
//   id: "abc",
// };

// let grade = Symbol("grade");
// member01[grade] = "vip";
// console.log(member01);

// const fnc = function () {
//   console.log("test");
// };

// 익명함수
// 함수는 이렇게 작성하는 것이 기본 문법
// function fnc01() {

// }

// prommpt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수
// 사용자가 아무리 숫자를 입력 => 문자열 형변환

// 문자열 + 숫자형 => 문자열
// - / * =>

// let str = "20";
// let num = 10;

// Number() : 매개변수로 들어오는 값을무조건 숫자로 형변환
// let result = Number(str) + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(false));
// console.log(Number("hi"));
// console.log(Number("20"));

// Number() VS parseInt() VS parseFloat()

// const userAge = prompt("당신의 나일을 입력하세요!");
// console.log(typeof userAge);

// 소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없음!!
// 숫자를 => 정수(소수점이 없는 값)로 바꿔주는 역할
// console.log(parseInt(false));

// 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요"));
// console.log(userHot);

// let num = null;

// console.log(typeof num.toString());

// console.log(typeof String(null));

// null & undefined

// console.log(Boolean());

// 사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 바탕화면 웹브라우저 화면에 섭씨온도를 출력해주세요

// 공식: 섭씨온도 = (화씨온도 -32) / 1.8

const tem = prompt("화씨온도를 입력하세요");

const ch = Number(tem);
const num02 = ((ch - 32) / 1.8).toFixed(1);

document.write(`화씨 ${tem} 도는 섭씨 ${num02}도 입니다3`);
