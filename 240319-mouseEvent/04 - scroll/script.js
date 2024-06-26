// 0% : 스크롤이 시작된 최초의 값
// 100% : (스크롤이 끝난느 마지막 좌표값 / 스크롤이 가능한 영역까지 포함한 전체문서 - 현재 보여지고있는 웹 브라우저 화면 영역) * 100

const bar = document.querySelector(".bar");
const h1 = document.querySelector("h1");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = percent(scrollNum, documentHeight) + "%";

  h1.innerText = per;
  bar.style.width = per;
});
