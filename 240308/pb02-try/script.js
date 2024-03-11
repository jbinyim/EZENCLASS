// input 태그를 통해서 사용자에게 어떤 숫자를 받을 것이다
// 사용자가 숫자를 입력한 후 입력버튼으 ㄹ클릭하게 되면
// 다음과 같은 조건에 따라서 아래와 같은 결과가 출력되도록 할 것입니다

// 만약 10보다 큰 숫자를 입력했다면, 알림창을 통해서 "10보다 작은 숫자를 입력하세요"
// 만약 10보다 작은 숫자를 입력했다면 result라는 공간에 해당 숫자가 출력되도록 할 것 입니다

// 단, 해당 코드를 어제 배운 try문과 catch finally를 통해서 작성해보세요
// try : 실행문
// catch : 만약 에러가 발생하게 되었을때 에러메세지를 출력시켜주는 함수
// finally : 실행문이 정장 혹은 에러가 발생해도 무조건 실행되는 공간

const button = document.querySelector("form");

const num = (e) => {
  e.preventDefault();
  let userNum = Number(document.querySelector("#user-number").value);
  try {
    if (userNum >= 10) {
      window.alert("10보다 작은 숫자를 입력하세요");
    } else if (userNum < 10) {
      const result = document.querySelector("#result");
      result.innerText = userNum;
    } else {
      throw "오류입니다";
    }
  } catch (err) {
    window.alert(err);
  } finally {
    userNum = "";
  }
};

button.addEventListener("submit", num);
