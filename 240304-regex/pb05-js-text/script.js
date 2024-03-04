import products from "./product.js";

const button = document.querySelector("button");

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const attr = document.createAttribute("src");
  const div = document.createElement("div");

  li.id = product.id;

  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.innerText = product.name;
  h3.className = "name";

  // 한국 '원' 표시 방법
  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  div.append(h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

// importData(); 그냥 화면에 출력할때 버튼 없이

button.addEventListener("click", importData);
