// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#Profile");
// const img = document.querySelector("#Profile img");
// const users = document.querySelectorAll(".user");
// const address = users[1];

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("Profile");
// const users = document.getElementsByClassName("user");

// console.log(h1);
// console.log(profile);
// console.log(users);

// const desc = document.querySelector("#desc");
// // desc.innerText = "이름 : 홍길동";
// const descName = desc.innerText; // 웹브라우저에 출력되는 것만 가져옴
// console.log(descName);
// const descHtml = desc.innerHTML;
// console.log(descHtml);

// const descContext = desc.textContent; // 웹브라우저에 출력 되지 않는 것도 가져옴 (ex. display:none;)
// console.log(descContext);

// 이벤트 핸들러 => 이벤트 작동 실행

// const title = document.querySelector("h1");
// title.onclick = function () {
//   title.innerText = "마이 프로필";
// };

// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("#Profile img");
// pfImg.onclick = () => (pfImg.src = "./img/pf2.png");

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "#fff";
};

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// const clickedTrue = userName.classList.contains("clicked");

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

userName.onclick = () => {
  userName.classList.toggle("clicked");
};
