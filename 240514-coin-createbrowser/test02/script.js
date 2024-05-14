import db from "./db.js";

const btns = document.querySelectorAll("li");
const ans = document.querySelector(".result");

const remove = () => {
  const p = document.querySelectorAll("p");
  p.forEach((item) => {
    item.remove();
  });
};

const onClick = (e) => {
  const menu = e.target.innerText;

  if (menu === "20세 이상") {
    const result = db.filter((item) => item.age >= 20);

    remove();
    result.forEach((it) => {
      create(it);
    });
  } else if (menu === "30세 이상") {
    const result = db.filter((item) => item.age >= 30);

    remove();
    result.forEach((it) => {
      create(it);
    });
  } else if (menu === "40세 이상") {
    const result = db.filter((item) => item.age >= 40);

    remove();
    result.forEach((it) => {
      create(it);
    });
  }
};

const create = (result) => {
  const p1 = document.createElement("p");

  p1.innerText = `${result.name} : ${result.age}`;

  ans.appendChild(p1);
};

btns.forEach((btn) => {
  btn.addEventListener("click", onClick);
});
