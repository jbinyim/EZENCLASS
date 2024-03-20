const imageAll = document.querySelectorAll(".parallaxImage");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;

  if (scrollNum < 2034) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
