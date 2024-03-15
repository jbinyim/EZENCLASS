// naigation
const menuhome = document.querySelector("#menuhome");
const menugame = document.querySelector("#menugame");
const menumusic = document.querySelector("#menumusic");
const contentFrame = document.querySelector("#contentFrame");

menuhome.style = "color:#000; background:#fff";
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuhome.style = "color:#fff; background:55b2e4";
  menumusic.style = "color:#fff; background:55b2e4";
  menugame.style = "color:#000; background:#fff";
};
const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menugame.style = "color:#fff; background:55b2e4";
  menumusic.style = "color:#fff; background:55b2e4";
  menuhome.style = "color:#000; background:#fff";
};
const musicChange = () => {
  contentFrame.setAttribute("src", "./music.html");
  menuhome.style = "color:#fff; background:55b2e4";
  menugame.style = "color:#fff; background:55b2e4";
  menumusic.style = "color:#000; background:#fff";
};

menugame.addEventListener("click", gameChange);
menuhome.addEventListener("click", homeChange);
menumusic.addEventListener("click", musicChange);
