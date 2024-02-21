// 1. 첫번째 수를 받는다
// 2. 두번째수를 받는다
// 3, 계산하기 버튼을 불러온다
// 4. 버튼을 누르면 게산을 한다
// 4-1. 수를 나열한다
// 4-2.
// 5. 계산이 끝나면 결과를 내보낸다

const num = document.querySelector("#number");
const num2 = document.querySelector("#number2");
const btn = document.querySelector("#calc");
const result = document.querySelector("#result");

const getGCD = (num, num2) => {
  const max = num > num2 ? num : num2;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (num % i === 0 && num2 % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

btn.onclick = (e) => {
  e.preventDefault();
  result.innerText = getGCD(num.value, num2.value);
};
