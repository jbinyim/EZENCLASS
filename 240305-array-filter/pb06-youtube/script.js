const player = document.querySelector(".player");
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");
const progressCover = document.querySelector(".progress");

const videopPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const width = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / width) * duration;
  video.currentTime = clickedTime;
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const current = video.currentTime;

  const percent = (current / duration) * 100;

  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (current / duration) * progressBarWidth - 1;

  progressBar.style.width = `${percent}%`;
  progressPointer.style.left = `${newPosition}px `;
};

const setRate = (e) => {
  // const rate = e.target.dataset.rate;
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

const formatting = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const play = () => {
  playButton.innerText = "∥";
  video.play();
};

const pause = () => {
  video.pause();
  playButton.innerText = "▶";
};

const tooglePlay = () => {
  video.paused ? play() : pause();
};

playButton.addEventListener("click", tooglePlay);
video.addEventListener("click", tooglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});
progressCover.addEventListener("click", videopPoint);
