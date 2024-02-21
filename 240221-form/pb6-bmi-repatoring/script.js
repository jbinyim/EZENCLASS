// 키 170 몸 73
// 73 / (1.7*1.7)

// const height = document.querySelector("#heghit");
// const weight = document.querySelector("#weight");
const btn = document.querySelector("form");
// const result = document.querySelector(".result");

// let ki = 0;
// let kg = 0;
// let calc = 0;

// const formFnc = (e) => {
//   e.preventDefault();
//   ki = height.value;
//   kg = weight.value;
//   calc = kg / ((ki / 100) * 2);
//   result.innerText = calc;
// };

// btn.onsubmit = formFnc;

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const display = (bmiFnc) => {
  const result = document.querySelector(".result");
  let group;
  if (bmiFnc >= 30.0) {
    group = "중등도 비만";
  } else if (bmiFnc >= 25.0) {
    group = "경도 비만";
  } else if (bmiFnc >= 23.0) {
    group = "과체중";
  } else if (bmiFnc >= 18.5) {
    group = "정상체중";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmiFnc} -> ${group} 입니다`;
};

const formhandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#heghit");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value != "" && heightInput.value != "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;

    const bmiFnc = calculate(weight, height);

    display(bmiFnc);
    heightInput.value = "";
    weightInput.value = "";
  }
};

btn.onsubmit = formhandler;
