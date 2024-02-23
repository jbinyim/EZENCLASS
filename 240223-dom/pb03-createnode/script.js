// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

// 1. 버튼을 불러온다
// 상품 설명란을 불러온다
// 2. 버튼을 누를시 밑에 상품 설명이 나와야한다
// 3. 다시 누르면 상품설명이 사라져야한다

// const btn = document.querySelector("#order");
// const info = document.querySelector("#orderInfo");
// const title = document.querySelector("#container h2");

// btn.onclick = () => {
//   if (!info.classList.contains("active")) {
//     info.classList.add("active");
//     info.appendChild(title);
//   } else {
//     info.classList.remove("active");
//     info.remove.appendChild();
//   }
// };

// btn.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     newP.appendChild(textNode);
//     newP.style.margin = "20px";
//     newP.style.fontSize = "1.2rem";
//     newP.style.color = "crimson";
//     info.appendChild(newP);
//   },
//   { once: true }
// );

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://i.namu.wiki/i/BN1Z3IbM4VoVibKa-QU_sVlmYeBGddpnfQHOlW1InGTFxPLuQqZ397HpsPvgI4ZS-nlvOFGVjOF9z6g3RVn1_A.webp";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
