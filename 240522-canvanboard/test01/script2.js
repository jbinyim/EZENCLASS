const word = "found7, time, study: Yduts emit 7Dnuof ";

// let leg = word.length;
// let ans = "";

// const test = word.toLowerCase().replace(/[^a-z]/g, "");
// for (let i = 0; i < test.length; i++) {
//   ans += test[leg - i - 1];
// }

// console.log(ans);

const solution = (word) => {
  let answer = "YES";
  const test = word.toLowerCase().replace(/[^a-z]/g, "");

  if (test.split("").reverse().join("") !== test) {
    return "no";
  }
  return answer;
};

console.log(solution(word));
