const btn = document.querySelector("form");
const result = document.querySelector(".result");

const sendFnc = (e) => {
  e.preventDefault();
  const num = document.querySelector("#number1").value;
  const num2 = document.querySelector("#number2").value;
  const max = num > num2 ? num : num2;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (num % i === 0 && num2 % i === 0) {
      GCD = i;
    }
  }
  result.innerText = `${GCD}`;
};

btn.onsubmit = sendFnc;
