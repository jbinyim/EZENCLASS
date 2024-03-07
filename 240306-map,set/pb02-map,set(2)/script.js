const member1 = ["html", "css"];
const member2 = ["css", "javascript", "react"];
const member3 = ["javascript", "typescript"];

const subjects = [...member1, ...member2, ...member3];
console.log(subjects);

const resaultList = new Set();

subjects.forEach((subject) => {
  resaultList.add(subject);
});
console.log(resaultList);

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
 ${[...resaultList].map((subject) => `<li>${subject}</li>`).join("")}
  
</ul>`;

// 1) 배열의 값을 복제하는 전개연산자 구문 (*원본데이터 값을)
// 2) map() : 새로운 배열을 만들고자 할 때 사용
// 3) join(구분자) : 배열의 데이터를 문자열로 변환
