// window.onload = alert("안녕하세요");

// const btn = document.querySelector("button");

// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };

// btn.onclick = btnFnc;
// const result = document.querySelector("#result");
// document.body.onkeydown = (event) => {
//   result.innerText = `
//     code: ${event.code},
//     key: ${event.key}
//   `;
// };

// const btn = document.querySelector("button");
// btn.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// };

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

const btn = document.querySelector("input[type='submit']");
const form = document.querySelector("form");

// form.addEventListener("click", () => {});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");
  const count = word.length;
  result.innerText = count;

  if (count >= 10) {
  } else {
    alert("아이디는 10자 이상이어야 합니다.");
  }
});
