const checkBox = document.querySelector("#checkbox");

checkBox.addEventListener("change", () => {
  const element = document.querySelector(".rect");

  if (element.classList.contains("state-now")) {
    element.classList.remove("state-now");
  } else {
    element.classList.add("state-now");
  }
});

const taragetEl = document.querySelector(".rect");
// css에서 애니ㅁ메이션 효과가 시작되는 타이밍에서 이벤트를 실행 시키려면 animationstart 이벤트 헨들러
// css에서 애니메이션 효과의 반복이 시작되는 타이밍 animationiteraion 이벤트 헨들러
// css에서 애니메이션 효과가 종료되는 타이밍 animationend 이벤트 헨들러

taragetEl.addEventListener("animationstart", () => {
  document.querySelector(".log").innerText =
    "animationstart 발생 : " + new Date().toLocaleTimeString();
});

taragetEl.addEventListener("animationiteration", () => {
  document.querySelector(".log").innerText =
    "animationiteration 발생 : " + new Date().toLocaleTimeString();
});
taragetEl.addEventListener("animationend", () => {
  document.querySelector(".log").innerText =
    "animationend 발생 : " + new Date().toLocaleTimeString();
});
