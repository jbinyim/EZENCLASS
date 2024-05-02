const tabBtns = document.querySelectorAll(".tab-btn a");

tabBtns.forEach((item) => {
  item.addEventListener("click", function () {
    tabBtns.forEach((it) => it.classList.remove("active"));
    this.classList.add("active");
  });
});
