// 사용자에게 키와 나이의 정보를 받아서 사용자가 현재 적정체중인지 확인후 웹브라우저 화면에 다음과 같이 출려해주세요

// 만약, 적정체중이라면 적정체중이네요 축하드립니다
// 라는 메세지가 출력되게 하고 만약 적정체중이 아니라면 조금만 더 노력해주세요 라는 메세지를 출력되게 해주세요

// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 결과값 +- 5kg 가지 허용

// 1. 사용자에게 키와 나이 값을 받아온다
// 2. 적정체중 값을 구한다.
// 3. 값이 나오면 상황에 맞는 메세지를 출력한다

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function (e) {
//   e.preventDefault;
//   const ki = document.querySelector("#ki").value;
//   const kg = document.querySelector("#kg").value;

//   const ans = (ki - 100) * 0.9;
//   const pans = ans + 5;
//   const mans = ans - 5;
//   let rans = kg <= pans && kg >= mans;
//   rans = rans ? "적정체중" : "뚱댕이";

//   result.innerHtml = `${rans}`;
// });

// const userName = prompt("당신의 이름을 말해주세요");
// const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?"));
// const userWeight = Number(prompt("당신의 몸무게는 어떻게 되십니까?"));

// const normalWeight = (userHeight - 100) * 0.9;
// let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
// result = result ? "적정체중이시네요 축하드립니다" : "조금만 더 노력해주세요";

// document.write(`${userName}님 ${result}`);

// 사용자로부터 오늘하루 동안 지출한 교통비와 식비 음료비를 받아서 계산한 후 해당값이 만원을 초과한 경우 "00원을 초과하였습니다. 조그만 더 노력해주세요" 라고 출력하고 만약 만원을 초과하지 않은 경우에는 "00원 남았습니다 돈관리 잘하셨습니다"라고 출력해주세요

// 1. 사용자로부터 오늘 지출한 교통비, 식비, 음료비를 받는다
// 2. 받은 값을 합친다
// 3. 합친 값이 만원이 초과 한 경우와 초과하지 않은 경우로 나눈다
// 4. 초과한 값 과 남은 값을 을 구한다
// 5. 나뉜 값으로 화면에 출력한다

const trans = Number(prompt("하루동안 지출한 교통비를 입력해주세요"));
const food = Number(prompt("하루동안 지출한 식비를 입력해주세요"));
const drink = Number(prompt("하루동안 지출한 음료비 입력해주세요"));

const normal = 10000;
const userMoney = trans + food + drink;
let result = userMoney < normal;
const coin1 = normal - userMoney;
const coin2 = userMoney - normal;
result = result ? `${coin1} 굳!` : `${coin2}초과입니다`;
document.write(` ${result}`);
