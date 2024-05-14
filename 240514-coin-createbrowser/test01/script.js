const btn = document.querySelector("button");
const text = document.querySelector("#text");

const onClick = () => {
  window.location.href = `https://twitter.com/intent/tweet?text=${text.value}`;
};

btn.addEventListener("click", onClick);
