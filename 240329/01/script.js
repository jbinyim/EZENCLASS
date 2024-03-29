const staggerWrap = document.querySelector("ul");
const fragement = document.createDocumentFragment();

const grid = [9, 3];
const [col, row] = grid;
const allElem = row * col;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragement.appendChild(li);
}

staggerWrap.appendChild(fragement);

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], {
    grid: [9, 3],
    from: "center",
    axis: "z",
  }),
});
