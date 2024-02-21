// 1. 버튼을 불러온다
// 2. detail을 불러온다
// 3. 버튼을 누

const btn = document.querySelector("#view");
const detail = document.querySelector("#detail");

btn.onclick = () => {
  detail.classList.toggle("checked");
};
