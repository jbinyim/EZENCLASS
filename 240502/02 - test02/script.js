// 3개의 변 중 가장 긴 길이가 나머지 2개의 길이합 보다 같거나 크면 삼경형이 될수없음

// const a = Number(prompt("첫번째 변"));
// const b = Number(prompt("두번째 변"));
// const c = Number(prompt("세번째 변"));

// let num;
// let shortnum;
// let shortnum2;

// if (a < b) {
//   num = b;
//   shortnum = a;
// } else {
//   num = a;
//   shortnum = b;
// }

// if (c > num) {
//   num = c;
//   shortnum2 = num;
// }

// let result = shortnum + shortnum2;
// console.log(num, shortnum, shortnum2, result);

// if (result >= num) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }

const a = Number(prompt("첫번째 변"));
const b = Number(prompt("두번째 변"));
const c = Number(prompt("세번째 변"));

const solution = (a, b, c) => {
  let answer = "yes";
  let max;
  let tot = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  if (tot - max <= max) answer = "no";
  return answer;
};
console.log(solution(a, b, c));
