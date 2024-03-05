const button = document.querySelector("button");

const tooglePlay = () => {
  const video = document.querySelector("video");
  if (video.paused) {
    button.innerText = "pause";
    video.play();
  } else {
    video.pause();
    button.innerText = "play";
  }
};

button.addEventListener("click", tooglePlay);
