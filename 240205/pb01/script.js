// html에서 작성한 선택자를 불러올때 항상 "$"
// template literal => $

// $(".testimorial-pic img").click(function () {
//   $(this).addClass("active");
//   $(this).siblings().removeClass("active");
//   $(".testimorial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
// });

const pics = document.querySelectorAll(".testimorial-pic img");
const contents = document.querySelectorAll(".testimorial content");
pics.forEach((pic) => {
  pic.addEventListener("click", function () {
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
    const targetContent = document.querySelector("#${targetContentId}");
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
