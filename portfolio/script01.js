const bar = document.querySelector(".bar");
const gnb = document.querySelector("#gnb");
const qaTitles = document.querySelectorAll(".title");
const descs = document.querySelectorAll(".desc");

bar.addEventListener("click", () => {
  gnb.classList.toggle("active");
  bar.classList.toggle("active");
});

qaTitles.forEach((title) => {
  title.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
    this.nextElementSibling.classList.add("active");
  });
});
