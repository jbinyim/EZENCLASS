const q = "(A(BC)D)EF(G(H)(L)K)LM(N)";

const solution = (str) => {
  let answer = undefined;
  let stack = [];

  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  answer = stack.join("");
  return answer;
};

console.log(solution(q));
