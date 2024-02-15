const bar = document.querySelector(".bar");
const gnb = document.querySelector("#gnb");
const lists = document.querySelectorAll(".list li");
const contents = document.querySelectorAll(".life-image .content");

bar.addEventListener("click", () => {
  gnb.classList.toggle("active");
  bar.classList.toggle("active");
});

lists.forEach((list) => {
  list.addEventListener("click", function () {
    function siblings(t) {
      const children = t.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const targetContentId = this.getAttribute("data-alt");
    const targetContent = document.querySelector(`#${targetContentId}`);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
