// const ans = prompt("괄호를 입력해주세요");

// let cnt = 0;
// let count = 0;

// for (let i = 0; i < ans.length; i++) {
//   if (ans[i] === "(") {
//     cnt++;
//   } else {
//     count++;
//   }
// }

// if (cnt === count) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const a = "(()(()))(()";

const solution = (a) => {
  let answer = "Yes";
  let stack = [];

  for (let x of a) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) return "No";
      stack.pop();
    }
  }
  if (stack.length > 0) {
    return "No";
  }
  return answer;
};

console.log(solution(a));
