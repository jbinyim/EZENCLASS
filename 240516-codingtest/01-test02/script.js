const userWord = prompt("문자를 입력하세요");
const userNum = prompt("확인하고싶은 문자 한 개를 입력하세요");

let count = 0;

const word = [...userWord];
word.filter((i) => {
  if (i === userNum) {
    count++;
  }
});

console.log(count);
