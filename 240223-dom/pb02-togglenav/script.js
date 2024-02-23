const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

// btn.onclick = () => {
//   if (!nav.classList.contains("active")) {
//     nav.classList.add("active");
//     btn.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//     btn.classList.remove("active");
//   }
// };
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
