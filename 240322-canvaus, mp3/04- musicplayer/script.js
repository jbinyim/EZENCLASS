const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audios = frame.querySelectorAll("audio");

//article의 각도 정의
const deg = 45;

// 뮤직패널 이미지 인덱스 값을 정의
let i = 0;
const len = list.length - 1;

// 프레임 네 뮤직패널 인덱스 값 정의
let num = 0;

// 프레임 내 뮤직패널 스타일 값 정의
let active = 0;

list.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./musicImg/member${i + 1}.jpg)`;

  i++;
  const pause = list.querySelector(".pause");
  const play = list.querySelector(".play");
  const load = list.querySelector(".load");

  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

const activation = (active, list) => {
  list.forEach((lists) => {
    lists.classList.remove("on");
  });
  list[active].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, list);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, list);
});
