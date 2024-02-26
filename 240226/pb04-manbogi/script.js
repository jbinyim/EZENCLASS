// 사용자로부터 "오늘부터 몇일간 만 보 걷기기"를 했는지 물어보고
// 임의 숫자를 받으세요
// 00일 연속 달성 출력될 수 있도록 해주세요

// 사용자로부터 날짜를 받는다
// 받은 날짜를 밀리초로 일 수 게산을 한다

const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요",
  "ex) 2024-01-01"
);
const toDay = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = toDay.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
