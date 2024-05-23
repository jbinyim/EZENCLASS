// let word = "goog";
// let max = "";
// let min = "";

// for (let i = 0; i < word.length; i++) {
//   max += word[i];
//   min += word[word.length - i - 1];
// }
// // for (let j = word.length; j >= 0; j--) {
// //   min += word[j];
// // }

// if (max === min) {
//   console.log("YES");
// } else {
//   console.log("No");
// }

let word = "gooG";

const solution = (word) => {
  let anwser = "Yes";
  const text = word.toLowerCase();
  const len = text.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (text[i] !== text[len - i - 1]) {
      return "No";
    }
  }
  return anwser;
};

console.log(solution(word));
