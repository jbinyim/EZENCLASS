const mainHeader = document.querySelector(".mainHeader");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const coverTitle = coverWrap.querySelector(".coverTitle");
const dind = coverWrap.querySelector(".dind");
const contentWrap = document.querySelector(".contentWrap");
// console.log(mainHeader, progressBar, coverWrap, coverTitle, dind, contentWrap);

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const scrollEvent = () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight) + "%";
  progressBar.style.width = per;

  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 5 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dind.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`;
  }
};

window.addEventListener("scroll", scrollEvent);
