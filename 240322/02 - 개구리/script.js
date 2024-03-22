const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

// face
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// eye left
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "white";
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

// eye circle
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(120, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 10, 0, Math.PI * 2, false);
ctx.fill();

// // eye rigtht
// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.fillStyle = "white";
// ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
// ctx.fill();
// ctx.stroke();

// // eye circle
// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.arc(180, 80, 5, 0, Math.PI * 2, false);
// ctx.fill();

// mouse
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.arc(150, 150, 50, 0, Math.PI * 1, false);
ctx.stroke();
