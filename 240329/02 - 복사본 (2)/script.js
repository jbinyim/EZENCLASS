const nav_btn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");

// nav
nav_btn.addEventListener("click", () => {
  nav_btn.classList.toggle("active");
  nav.classList.toggle("active");
});

// anime
const sesc0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 3000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterload: (old_element, new_element) => {
    if (new_element.index === 0) {
      console.log("Sec0");
      sesc0();
    }
  },
});
