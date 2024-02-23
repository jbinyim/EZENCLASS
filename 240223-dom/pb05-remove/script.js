// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNoed = document.querySelectorAll("p")[0];

// document.body.insertBefore(tsNode, basisNoed);
// const heading = document.querySelector("h1");
// heading.addEventListener("click", () => {
//   heading.remove();
// });
// const parentH1 = heading.parentNode;
// console.log(parentH1);

// this  객체
// 단 조건 => 현재 선택한 li 태그를 this객체로 대처해서 사용 할 수 있음 단, 클래스 함수를 사용할때에만 가능 => 화살표함수를 사용할때에는 this객체가 이벤트를 실행시키는 다상자 = 주체가 되는 것이 아니라 window객체가 this가 됩니다

// const items = document.querySelectorAll("li");
// for (let item of items) {
//   item.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

// const products = document.querySelectorAll("#products p");
// const btn = document.querySelectorAll("p span");

// for (let product of products) {
//   btn.addEventListener("click", () => {
//     product.parentNode.remove();
//   });
// }

const buttons = document.querySelectorAll("p span");
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
