// 사용자가 이메일주소를 입력하면 result 공간에 사용자의 이메일정보를 출력하게 해주세요
// 단 이메일 주소중 @ 앞의 내용을 3자리까지만 출력 해주세요
// 그리고 4번재 자리부터는 ...으로 표기해주세요
// abcd@naver.com => abc...@naver.com

const btn = document.querySelector("form");
const result = document.querySelector("#result");

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#userEmail").value;

  if (email !== "") {
    let index = 0;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        index = i;
      }
    }

    const userFront = email.slice(0, 3);
    const userBack = email.slice(index);
    result.innerText = `${userFront}...${userBack}`;
  }
});
