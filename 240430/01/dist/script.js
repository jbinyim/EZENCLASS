const container = document.querySelector("#container");
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
let text;
let hours2;
if (hours < 12) {
  text = "오전입니다";
  hours2 = hours;
} else {
  text = "오후";
  // hours2 = hours - 12;
}
container.innerText = `${text} ${hours}시 ${minutes}분입니다`;

//# sourceMappingURL=script.js.map
