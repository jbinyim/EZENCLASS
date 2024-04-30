const container = document.querySelector("#container") as HTMLParagraphElement;

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

let text: string;
let hours2: number;

if (hours < 12) {
  text = "오전입니다";
  hours2 = hours;
} else {
  text = "오후";
  // hours2 = hours - 12;
}

container.innerText = `${text} ${hours}시 ${minutes}분입니다`;
