// 오늘 옆에 있는 친구들과 점심
// 짜장면 돈가스 부대찌게 회덮밥 마라탕
// 상기메뉴 후보
// 상기 메뉴를 랜덤으로 한개 메뉴 선택해서 웹 브라우저에 출력될 수 있도록 코드를 작성해보세요
const btn = document.querySelector("button");

const menu = ["짜장면", "돈가스", "부대찌게", "회덮밥", "마라탕"];

const play = () => {
  const ran = Math.floor(Math.random() * 5);
  const ch = menu[ran];
  const result = document.querySelector(".result");
  result.innerText = ch;
};

btn.addEventListener("click", play);
