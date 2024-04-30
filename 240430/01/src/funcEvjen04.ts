// 함수를 정의할 떄,
// 일반, 익명, 화살표
// function

// 배열 혹은 객체
// const arr = [];
// 변수 선언문 방식
const arr = new Array();
const obj = new Object();
const fnc = new Function();

// 함수 타입정의 : 실행문 / 표현식문

// 실행문 지향 언어 방식
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// 표현식문 지향 언어 방식
const sum1 = (a: number, b: number): number => a + b;

console.log(sum1(1, 2));
console.log(sum2(1, 2));
