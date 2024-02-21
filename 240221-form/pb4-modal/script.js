// 1. 열기,닫기 버튼, 컨테이너를 불러온다
// 2. 버틀을 클릭하면 클릭버튼은 사라지고  컨데이너가 불려온다
// 3. 닫는 버튼을 누르면 컨테이너가 사라지고 열기버튼이 나온다

const open = document.querySelector(".open");
const container = document.querySelector(".container");
const close = document.querySelector(".close");

// open.onclick = () => {
//   if (!container.classList.contains("checked")) {
//     container.style = "display:block";
//     container.classList.add("checked");
//     open.style = "display:none";
//   } else if (container.classList.contains("checked")) {
//     container.style = "display:none";
//   }
// };

// close.onclick = () => {
//   if (container.classList.contains("checked")) {
//     container.style = "display:none";
//     open.style = "display:block";
//   } else if (!container.classList.contains("checked")) {
//   }
// };

const openFnc = () => {
  open.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  open.style.display = "block";
  container.style.display = "none";
};

open.onclick = openFnc;
close.onclick = closeFnc;
