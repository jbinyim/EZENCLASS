const submit = document.querySelector("form");
const reset = document.querySelector("button");
const result = document.querySelector(".result");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const total = Number(document.querySelector(".total").value);
  const pepple = Number(document.querySelector(".pepole").value);
  let num = [];
  for (let i = 1; i <= total; i++) {
    let random = Math.ceil(Math.random() * i);
    num += random;
    // console.log(random);
    if (num.length < pepple) {
      console.log(num);
      // result.innrText = num;
    }

    // if (num.length) {
    // }
  }
});
