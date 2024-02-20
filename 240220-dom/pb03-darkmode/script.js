const btn = document.querySelector("#toggle-box button");
const body = document.querySelector("body");

btn.onclick = () => {
  if (!body.classList.contains("clicked")) {
    btn.innerText = "라이트모드로 바꾸기";
    body.classList.add("clicked");
  } else {
    btn.innerText = "다크모드로 바꾸기";
    body.classList.remove("clicked");
  }
};
