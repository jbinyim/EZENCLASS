import products from "./product.js";

const button = document.querySelector(".container > button");
const asceButton = document.querySelector(".ascending");
const desceButton = document.querySelector(".descending");
const newlisting = document.querySelector(".newlisting");
const select = document.querySelector("select");

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex;
  const value = e.target.options[selectedIndex].value;

  const filtered = products.data.filter((product) => {
    return product.category === value;
  });

  removeItems();
  filtered.forEach((product) => {
    createItem(product);
  });
};

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesce = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });
  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const createItem = function (product) {
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
asceButton.addEventListener("click", sortAsce);
desceButton.addEventListener("click", sortDesce);
newlisting.addEventListener("click", sortNew);
select.addEventListener("change", selectCategory);
