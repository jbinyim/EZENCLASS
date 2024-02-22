const elements = document.querySelectorAll("*");

for (let elemnet of elements) {
  elemnet.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
