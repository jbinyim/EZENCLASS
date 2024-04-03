// 마우스 스크롤을 하던 손가락 스크롤을 하던
// 스크롤 이벤트 필요

const scrollEvent = () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 275) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollEvent);

// 마우스 & 손가락
// click : 마우스를 클릭했다가 떼는 순간 이벤트 발생
// mousedown  & touchstart

// 컴퓨터 혹은 모바일 디바이스는 사용자가 얼만큼 스크롤을 했는지 어떻게 알수 있을까?

// scrollWidth : 사용자가 스크롤을 할 수 있는 전체 컨텐츠의 전체 너비값
// clientWidth : 사용자의 눈으로 확인이 가능한 디바이스 메체상의 너비값
// 276

// 사용자가 처음으로 스크롤을 하기 위해 찍은 지점
let startX = 0;

// 사용자가 스크롤을 한 이후의 지점 = 종착지점
let nowX = 0;

// 사용자가 스크롤을 통해서 이동한 만큼의 너비
let listX = 0;

// 사용자가 더이상 스크롤을 사용하지 않을 경우 마지막 종료 지점
let endX = 0;

// 두번째로 스크롤을 움직이고자 할 때 세팅되어야하는 위치값
//  listX + nowX - startX

const hashContent = document.querySelector(".hashcontents");
const listScrollWidth = hashContent.scrollWidth + 276;
const listClientWidth = hashContent.clientWidth;
const minus = listClientWidth - listScrollWidth;

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
  return parseInt(
    window.getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onscrollMove = (e) => {
  nowX = getClientX(e);
  console.log(`종착지점: ${nowX}`);
  setTranslateX(listX + nowX - startX);
};

const onscrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }
  window.removeEventListener("mousedown", onscrollStart);
  window.removeEventListener("touchstart", onscrollStart);
  window.removeEventListener("mousemove", onscrollMove);
  window.removeEventListener("touchmove", onscrollMove);
  window.removeEventListener("mouseup", onscrollMove);
  window.removeEventListener("touchend", onscrollMove);

  setTimeout(() => {
    bindEvents();
    hashContent.style.transition = "";
  }, 100);
};

const onscrollStart = (e) => {
  startX = getClientX(e);
  console.log(`스타트지점: ${startX}`);
  window.addEventListener("mousemove", onscrollMove);
  window.addEventListener("touchmove", onscrollMove);
  window.addEventListener("mouseup", onscrollEnd);
  window.addEventListener("touchend", onscrollEnd);
};

const bindEvents = () => {
  hashContent.addEventListener("mousedown", onscrollStart);
  hashContent.addEventListener("touchstart", onscrollStart);
};

bindEvents();
