// JS 언어 이야기
// 객체지향 언어

// 외부에서 json 형식의 데이터를 가져와서 웹브라우저 출력해야하는 상황

// Js 언어 => 태생적으로 동기 처리 방식을 한다.

// 동기 => 순차적으로 무언가를 처리한다는 뜻
// 예시 => 커피숍

// Js 동기이지만 특정 상황에 닥쳤을 때 비동기처리를 할 수 있도록 해야하지 않을까?
// JS 비동기처리 방식 총 3번에 걸쳐서 업그레이드

// 1) 콜백함수
// 2) promise 프로미스 객체
// 3) async, await 키워드 사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("c");
// };

// displayA();
// displayB();
// displayC();

// 제 아무리 displayB 함수의 호추루이 displayC 함수 호출보다 먼저 발생했어도 displayC함수의 결과 값이 먼저 나오게 할 수만 있다면 우리는 자바스크립트 언어를 비동기 처리가 된것처럼 만들어 낼수 있는 것이다.

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// const display = (result) => {
//   console.log(`${result} 준비완료`);
// };

// const order = (coffee, coallback) => {
//   console.log(`${coffee}  주문접수`);
//   setTimeout(() => {
//     coallback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

// 콜백지옥
// const displaylayletter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("E");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displaylayletter();

// promise 객체
