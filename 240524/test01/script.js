const word = prompt("문자를 입력하세요");

// let ans = [];
// let count = 0;
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === word[i + 1]) {
//     count++;
//   } else {
//     ans += word[i];
//     console.log(count);
//     // abs += String(count);
//   }
// }
// console.log(ans, count);

const solution = (word) => {
  let answer = "";
  let count = 1;

  const test = word;

  for (let i = 0; i < word.length; i++) {
    if (test[i] === test[i + 1]) {
      count++;
    } else {
      answer += test[i];
      if (count > 1) {
        answer += String(count);
        count = 1;
      }
    }
  }
  return answer;
};

console.log(solution(word));
