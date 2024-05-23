const word = prompt("단어를 입력하세요");

// const regex = /[^0-9]/g;
// const result = word.replace(regex, "");
// if (result.charAt(0) === "0") {
//   let ans = result.slice(0);
//   console.log(ans);
// }

let ans = "";
const solution = (word) => {
  for (let w of word) {
    if (!isNaN(w)) {
      ans += w;
    }
  }
  return Number(ans);
};

console.log(solution(word));
