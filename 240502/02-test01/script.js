// const submit = document.querySelector("form");
// const inputText = document.querySelectorAll(".inputText");

// const getNum = (e) => {
//   e.preventDefault();

//   inputText.forEach((num) => {
//     console.log(n);
//   });
// };

// submit.addEventListener("submit", getNum);

const a = Number(prompt("첫번쨰 숫자"));
const b = Number(prompt("두번쨰 숫자"));
const c = Number(prompt("세번쨰 숫자"));

const solution = (a, b, c) => {
  let result;

  if (a < b) {
    result = a;
  } else {
    result = b;
  }

  if (c < result) {
    result = c;
  }

  return result;
};
console.log(solution(a, b, c));
