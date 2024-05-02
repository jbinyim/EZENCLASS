// const student = Number(prompt("학생수를 입력하세요"));

// let pen = 12;
// let result;
// const a = student / pen;

// if (student % 12 === 0) {
//   result = student / pen;
// } else {
//   result = student / pen + 1;
// }
// console.log(Math.floor(result));

const student = Number(prompt("학생수를 입력하세요"));

const solution = (student) => {
  let answer;
  answer = Math.ceil(student / 12);
  return answer;
};
console.log(solution(student));
