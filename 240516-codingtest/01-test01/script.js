const word = prompt("영어단어를 입력해주세요");

// const splitStr = [...word];
// console.log(splitStr);

// let ansA = 0;

// splitStr.filter((i, idx) => {
//   if (i === "A") {
//     ansA = idx;
//   }
// });

// console.log(ansA);
// splitStr.forEach((item) => {
//   item[ansA] = "#";
// });

const solution = (word) => {
  let answer = word;
  // g : global (*전역)
  // i : ignore case (*제외 혹은 열외를 허용하지 않음)
  answer = answer.replace(/A/gi, "#");
  return answer;
};

console.log(solution(word));
