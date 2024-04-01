// 도형을 만들고 색상을 부여할 떄 투명도 정의하는 방법 2가지

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

console.log(ctx);

// ctx.globalAlpha = 0.3;

// ctx.fillStyle = "rgb(255, 0 , 0, 0.2)";
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 0 , 255)";
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 255 , 0)";
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = "rgb(255, 255 , 0)";
// ctx.fillRect(350, 50, 100, 50);

// 선형그라디언트 && 원형그라디언트
// 리니언그라디언트 && 레디얼그라디언트

// let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 2개의 원이 필요하다
// 먼저 입력되는 수치값 내부 원
// 나중 입력되는 수치값 외부 원
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();
