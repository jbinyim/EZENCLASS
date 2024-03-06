const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또 큐칙
// 한번 추첨시 : 6개 숫자 반드시 중복X
// 6개의 각각의 숫자 : 최대 45
// 1~45까지의 구간 숫자 랜덤 => 수학객체(random) + 45
// 반복문 + 6번
// 중복X => set() - add()
// 출력

const lukyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = lukyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
};

button.addEventListener("click", lottoPlay);
