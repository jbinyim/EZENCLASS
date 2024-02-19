//  사용자로부터 숫자 하나를 받으시고 해당 숫자가 양수인지 음수인지, 0 인지 판단해서 알림창을 활용해 아에 대한 결과를 출력해주세요
// 반환 값이 숫자일 경우에만 함수를 실행시켜주세요

// 1.사용자로부터 숫자를 받는다
// 2. 해당 숫자가 양수인지 음수인지를 확인할수 있는 함수를 만든다
// 3. 조건문을 이용해 결과값을 출력한다

// const num = 0;

// const userNum = Number(prompt("숫자 하나를 입력해주세요"));

// if (userNum > num) {
//   alert(`${userNum}은 양수입니다.`);
// } else if (userNum < num) {
//   alert(`${userNum}은 음수입니다.`);
// } else if (userNum === 0) {
//   alert(`${userNum}은 0 입니다.`);
// } else {
//   alert(`숫자가 아닙니다.`);
// }

// 1. 사용자에게 값을 받는다
// 2. 사용자에게 전달받은 값이 숫자인경우를 필터링 한다
// 3. 사용자에게 받은 값이 숫자라고 한다면 해당숫자를 조건식에 따라서 양,음,0인지 출력해줄수 있는 함수를 정의한다

const number = parseInt(prompt("숫자를 입력해주세요"));

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n} 양수입니다`);
  } else if (n < 0) {
    alert(`${n} 음수입니다`);
  } else {
    alert(`${n}입니다`);
  }
};

if (!isNaN(number)) {
  isPositive(number);
} else {
  alert("숫자가 아닙니다.");
}
