const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200, 0 , 0)";
// ctx.fillRect(10, 10, 50, 100);

// JS 세계관
// 시간 : 1초 / 밀리초 1000
// 각도 : 1도 45도 => deg X
// Radian : 라디언 / 래디언
// 1래디언 = 180도 = PI/180 = (PI/180) * 180 => PI * 1
// 2래디언 = 360도 = PI*2 = (PI/180) * 360 => PI * 2

// Math.PI * 0.5 => 90도
// Math.PI * 1.5 => 270도

// const radians = (Math.PI / 180) * 100;
// ctx.fillStyle = "rgb(200, 0 , 0)";
// ctx.strokeStyle = "black";
// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI * 1, true);
ctx.closePath();
ctx.stroke();
