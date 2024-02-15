// if ((조건식) => true) {
// 실행문 실행됨!
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다.`);
// }

// const score = Number(prompt("프로그램 점수: "));
// // 예외 조항 처리
// // 중첩 = 반복해서 사용가능
// if (score != null) {
//   if (score >= 90) {
//     alert("a학점");
//   } else if (score >= 80) {
//     alert("b학점");
//   } else {
//     alert("c학점");
//   }
// }

// 자료구조 & 알고리즘

// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지 확인후 알림창을 활용해서 사용자에게 짝수 혹은 홀수 입니다 라는 메세지를 출력해주세요

// 1.사용자에게 숫자를 받는다
// 2.받은 숫자를 /2 해서 짝수인지 홀수 인지 확인한다.
// 3.상황에 맞게 메세지를 출력한다.

// const num = prompt("숫자를 입력해주세요");
// if (num != null) {
//   const resetNum = Number(num);
//   if (resetNum % 2 === 0) {
//     alert("짝수입니다.");
//   } else {
//     alert("홀수입니다");
//   }
// } else {
//   alert("숫자를 입력하세요");
// }

// if (num != null) {
//   const resetNum = Number(num);
//   resetNum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("숫자를 입력하세요");
// }

// 사용자에게 1~12 까지의 숫자중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림 메세지가 출력되게 해주세요
// 사용자가 입력한 숫자 : 9 ~ 11 => 독서의 계절 가을이네요
// 사용자가 입력한 숫자 : 6 ~ 8 => 여행하기 좋은 여름이네요
// 사용자가 입력한 숫자 : 3 ~ 5 => 햇살 가득한 봄이네요
// 사용자가 입력한 숫자 : 12 ~ 2 => 스키의 계절 겨울이네요

// 1. 사용자에게 1~12의 숫자를 받는다. *다른 숫자를 입력할시 오류메세지
// 2. 숫자에 맞은 메세지를 출력한다.

// const userNum = prompt("1 ~ 12중 하나의 숫자를 입력해주세요");

// if (userNum != null) {
//   const resetNum = Number(userNum);
//   if (resetNum >= 9 && resetNum <= 11) {
//     alert("독서의 계절 가을이네요");
//   } else if (resetNum >= 6 && resetNum <= 8) {
//     alert("여행하기 좋은 여름이네요");
//   } else if (resetNum >= 3 && resetNum <= 5) {
//     alert("햇살 가득한 봄이네요");
//   } else if (resetNum >= 13) {
//     alert("1~12중 입력하세요");
//   } else {
//     alert("스키의 계절 겨울이네요");
//   }
// } else {
//   alert("숫자를 입력하세요");
// }

// 사용자에게 id 와 pw 값을 받으세요 그리고 해당 값이 다음과 같다면 "반갑습니다 어서오세요 "라는 메세지를 출력세요
// id = ezenit / pw = 1234
// 그런데 만약 id만 일치하고 pw가 틀릴경우 비밀번호를 확인해주세요 라는 메세지를 출력해주시고
// 만약 둘다 틀렸을 경우에는 id를 확인해주세요 라는 메세지를 출력해주세요

// 1.사용자에게 id와pw 값을 받는다
// 2.값이 일치할경우 확인 메세지를 출력한다
// 3. id만 일치할경우 비번확인 메세지 출력
// 4. 둘다 틀리면 id확인 메세지 출력

// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("id를 입력해주세요");
// const userpw = prompt("pw를 입력해주세요");

// if (userId != null || userpw != null) {
//   if (id == userId && pw == userpw) {
//     alert("반갑습니다 어서오에요");
//   } else if (id === userId && pw != userpw) {
//     alert("비밀번호를 확인해주세요");
//   } else if (id != userId && pw != userpw) {
//     alert("id를 확인해주세요");
//   }
// } else {
//   alert("취소되었습니다");
// }

// if (userId == id) {
//   const userpw = Number(prompt("pw를 입력해주세요"));
//   if (userpw === pw) {
//     alert(`${userId}님 환영합니다`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다");
//   location.reload();
// }

// switch(조건식 => 참) {
// case 값 : 실행문
// break
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-html, 2-css,3-js");
// if (subject != null) {
//   switch (subject) {
//     case "1":
//       alert("html을 신청하셨습니다.");
//       break;
//     case "2":
//       alert("css을 신청하셨습니다.");
//       break;
//     case "3":
//       alert("js을 신청하셨습니다.");
//       break;
//     default:
//       alert("똑바로 입력하세요");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다");
//   location.reload();
// }

// 사용자에게 즐겨찾는 쇼핑물을 물어보시고 이에 대한 답을 받아주세요
// 쇼핑물 후보 : 쿠팡 / g마켓 / 11번가 / 마켓컬리
// 사용자가 선택한 쇼핑물이 후보군 안에 존재한다면 prompt창에 확인 버튼을 클릭하는 순간 해당 쇼핑물로 이동하게 만들어주세요
// window 객체안에 location 객체는 어딘가로 이동하게 해주는 객체
// location 객체안에 href 속성 => 경로 지정해주는 속성
// 쿠팡을 선택했다면 location.href = http://www.coupang.com 결과값을 선택하면 쿠팡사이트로 이동가능

const ans = prompt(
  "선호하는 쇼핑물을 골라주세요 (1.쿠팡)(2.g마켓)(3.11번가)(4.마켓컬리)"
);
if (ans != null) {
  switch (ans) {
    case "1":
      location.href = "https://www.coupang.com/";
      break;
    case "2":
      location.href = "https://m.gmarket.co.kr/";
      break;
    case "3":
      location.href =
        "https://www.11st.co.kr/?gclid=EAIaIQobChMIn_aUkq2shAMVJesWBR3vFAlBEAAYAiAAEgK0vvD_BwE&gad_source=5&utm_term=11QJSRK&utm_campaign=%B1%B8%B1%DBPC_%C0%CF%C4%A1&utm_source=%B1%B8%B1%DB_PC_S&utm_medium=%B0%CB%BB%F6";
      break;
    case "4":
      location.href = "https://www.kurly.com/main";
      break;
    default:
      alert("잘못 입력하셨습니다");
      location.reload();
  }
} else {
  alert("취소되었습니다.");
  location.reload();
}
