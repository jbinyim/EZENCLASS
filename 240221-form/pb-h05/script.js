const text = document.querySelector("input[type='text']");
const btn = document.querySelector("#button");
const result = document.querySelector("ul");

const todo = (e) => {
  e.preventDefault();

  if (text.value != "") {
    const li = document.createElement("li");
    li.innerText = text.value;
    result.appendChild(li);
    text.value = "";
  }
};

btn.onclick = todo;
