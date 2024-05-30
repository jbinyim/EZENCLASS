// 어떤 숫자 값을 인수로 전달했을 떼 숫자가 1개식 증가하는 함수

// const myFunction = (number) => {
//   console.log(number);
//   myFunction(number + 1);
// };

// myFunction(1);

// 재귀함수의 단점 중 하나
// 브레이크를 걸어주지 않은 무한으로 셀프반복
// 컴퓨터는 재귀함수를 만나면 cpu를 활용해서 계산 => 저장공간 = 풀스택
// 브레이크 = 기자조건 = 탈출조건

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   let c = funcB();
//   return a + b + c;
// };

// console.log(funcA());

// const myFunction = (n) => {
//   if (n > 3) return;
//   console.log(n);
//   myFunction(n + 1);
// };

// myFunction(1);

// 재귀함수는 풀스택의 영역을 많이 차지합닌다
// 메모리가 많지 않은 시스템일 수록 재귀함수

// 절데로 반복문이 따라오지 못하는 순간
// 팩토리얼 타입의 연산 작업
// 숫자 n이 주어졌을때 1부터 n가지의 모든 수의 곱을 계산하는 것

// 재귀적으로 무언가를 표현하는 것이 처음에는 굉장히 어색함
// 팁 : 재귀함수를 하양식으로 작성하는 것을 추천
// => 이미 재귀함수의 시스템이 구축되어있다고 생각하고 연산식을 작성

// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// [1, 2, 3, 4, 5] => 해당배열안에 입력되어있는 숫자를 모두 더하는 하향식 재귀함수를 활용해서 결과값을 도출하세요

// const func = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     if (number + func(number + 1) < 5) return number + func(number + 1);
//   }
// };
// console.log(func(1));

// const arr = [1, 2, 3, 4, 5];

// const sumAraay = (arr) => {
//   return sumAraay(arr[arr.length - 1] + arr.slice(0, -1));
// };

// console.log(sumAraay(arr));

// 하노이탑 - 프랑스 수학자

// 원반의 개수 : count
// 시작하는 기둥 : from
// 도착하는 기둥 : to
// 잠시머물러야 하는 기둥 : temp

const haroi = (count, from, to, temp) => {
  if (count === 0) return;
  haroi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  haroi(count - 1, temp, to, from);
};

haroi(3, "a", "c", "b");
