document.write("<h1>컴퓨터와 & 나의 가위,바위,보 맞추기 게임</h1>");
const game = prompt("가위, 바위, 보 중 선택하세요");

let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("다시 입력하세요");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(`<img src="./img/math_img_${com}.jpg">`);

if (gameNum === com) {
  document.write("같습니다");
} else {
  document.write("다릅니다.");
}
